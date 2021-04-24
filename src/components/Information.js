// Libraries
import React from 'react';

// Render
export class Information extends React.Component {
	render() {
		return (
			<article className="information">
				<label htmlFor="show_cpu">CPU: </label>
				<p name="show_cpu" id="show_cpu">0</p>
				<label htmlFor="show_gpu">GPU: </label>
				<p name="show_gpu" id="show_gpu">0</p>
				<label htmlFor="show_memory">Mem: </label>
				<p name="show_memory" id="show_memory">0</p>
				<label htmlFor="show_fps">FPS: </label>
				<p name="show_fps" id="show_fps">0</p>	
			</article>
		)
	}
}

export default Information;