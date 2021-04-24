// Libraries
import React from 'react';

// Render
export class Display extends React.Component {
	render() {
		return (
			<section className="display">
				<div className="display-input">
					<video id="input_frame" autoplay>
					</video>
					<div className="video-options">
						<select name="" id="" className="custom-select">
							<option value=""> Select camera</option>
						</select>
					</div>
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