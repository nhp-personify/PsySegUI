// Libraries
import React from 'react';

// Get camera
import Camera from "../utilities/camera.js";

// Get store
import { store } from "../store";

// Render
export class Display extends React.Component {

	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
		this.handleCamera = this.handleCamera.bind(this);
	}

	// Start / Stop render of input frame
	handleInput() {
		this.camera.render();
	}

	// Starting camera
	handleCamera() {
		if (store.getState().status === "on") {
			if (this.camera === undefined) {
				this.camera = new Camera(480, 360);
			}
			this.camera.run();
		} else {
			if (this.camera !== undefined) {
				this.camera.stop();
			}
		}
		
	}

	// Starting camera
	componentDidMount() {
		store.subscribe(this.handleCamera);
	}

	render() {
		return (
			<section className="display">
				<div className="input">
					<video id="videoInput" autoplay></video>
					<canvas id="canvasInput"></canvas>
					<img id="showInput" onClick={this.handleInput}></img>
				</div>
				<canvas id="alpha_mask">
				</canvas>
				<canvas id="output_frame">
				</canvas>
			</section>
		)
	}
}

export default Display;