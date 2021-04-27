// Libraries
import React from 'react';

// Actions Linkage
import { store } from "../store";
import { setSize, setFPS, setMode, setColorspace, setBackend, setStatus } from "../actions";

// Render
export class Setting extends React.Component {
	
	// Dispatch for change FPS
	dispatchFPS(e) {
		const fps = e.target.value;
		store.dispatch(setFPS(fps));
	}
	
	// Dispatch for change frame size
	dispatchSizeChange(e) {
		const size = e.target.value;
		store.dispatch(setSize(size));
	};
	
	// Dispatch for change mode
	dispatchModeChange(e) {
		const mode = e.target.value;
		store.dispatch(setMode(mode));
	};
	
	// Dispatch for change colorspace
	dispatchColorChange(e) {
		const colorspace = e.target.value;
		store.dispatch(setColorspace(colorspace));
	};
	
	// Dispatch for change backend
	dispatchBackendChange(e) {
		const backend = e.target.value;
		store.dispatch(setBackend(backend));
	};
	
	// Dispatch for starting
	dispatchStarting(e) {
		const status = "on";
		store.dispatch(setStatus(status));
	}

	// Dispatch for stopping
	dispatchStopping(e) {
		const status = "off";
		store.dispatch(setStatus(status));
	}

	render() {
		return (
			<article className="setting">
				<label htmlFor="set_fps">FPS: </label>
				<select name="set_fps" id="set_fps" onChange={this.dispatchFPS}>
					<option value={24}>24</option>
					<option value={15}>15</option>
					<option value={30}>30</option>
				</select>			
				<label htmlFor="set_size">Frame Size: </label>
				<select name="set_size" id="set_size" onChange={this.dispatchSizeChange}>
					<option value="small">480 x 360</option>
					<option value="medium">640 x 480</option>
					<option value="large">1080 x 720</option>
				</select>
				<label htmlFor="set_mode">Mode: </label>
				<select name="set_mode" id="set_mode" onChange={this.dispatchModeChange}>
					<option value="full">Full</option>
					<option value="ultralite">Ultra Lite</option>
					<option value="dnn">DNN only</option>
				</select>
				<label htmlFor="set_colorspace">Colorspace: </label>
				<select name="set_colorspace" id="set_colorspace" onChange={this.dispatchColorChange}>
					<option value="rgb">RGB</option>
					<option value="i420">I420</option>
					<option value="hsv">HSV</option>
				</select>
				<label htmlFor="set_backend">Backend: </label>
				<select name="set_backend" id="set_backend" onChange={this.dispatchBackendChange}>
					<option value="cpu">CPU</option>
					<option value="gpu">GPU</option>
				</select>
				<button id="startBtn" onClick={this.dispatchStarting}>Start</button>
				<button id="stopBtn" onClick={this.dispatchStopping}>Stop</button>
			</article>
		)
	}
}

export default Setting;