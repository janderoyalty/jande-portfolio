import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Wave from "./components/Wave";

import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";

function App() {
	return (
		<div className="App">
			<div id="bg"></div>
			<div id="app-content">
				<Navigation></Navigation>
				<div id="non-nav-content">
					<Landing></Landing>

					{/* PINK WAVE TOP */}
					<Wave
						shapeCase="custom-shape-divider-bottom-1710401380"
						shapeFill="shape-fill-pink" // PINK WAVE
					></Wave>

					<Project></Project>

					<Skills></Skills>
					{/* YELLOW WAVE TOP */}
					<Wave
						shapeCase="custom-shape-divider-bottom-1710401643"
						shapeFill="shape-fill-yellow" // YELLOW WAVE
					></Wave>

					<Contact></Contact>
					<Footer></Footer>
				</div>
			</div>
		</div>
	);
}

export default App;
