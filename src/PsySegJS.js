// Libraries React
import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheet
import './PsySegJS.css';

// Components
import Header from "./components/Header.js";
import Setting from "./components/Setting.js";
import Information from "./components/Information.js";
import Effect from "./components/Effect.js";
import Display from "./components/Display.js";
import Footer from "./components/Footer.js";

// Utilities
//import startCamera from "./utilities/camera.js"

// Main class of test apps
class PsySegJS extends React.Component {
	
	componentDidMount() {
		var video = document.getElementById('input_frame');
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			// Not adding `{ audio: true }` since we only want video now
			navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
				//video.src = window.URL.createObjectURL(stream);
				video.srcObject = stream;
				video.play();
			});
		}
    }
	
	render() {
		return (
			<main>
				<Header />
				<section className="controller">
					<Setting />
					<Information />
					<Effect effects={["blur", "overlay", "chroma", "colorize", "aura"]}/>
				</section>
				<Display />
				<Footer />
			</main>
		)
	}
}

// Rendering
ReactDOM.render(<PsySegJS />, document.getElementById('main'));