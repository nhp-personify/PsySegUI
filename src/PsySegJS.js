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

// Main class of test apps
class PsySegJS extends React.Component {
	
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