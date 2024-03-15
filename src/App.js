import React, { useState, useEffect } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Wave from "./components/Wave";

import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import { Modal } from "react-bootstrap";

function App() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (screenWidth < 550) {
			setShowModal(true);
		} else {
			setShowModal(false);
		}
	}, [screenWidth]);

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
			<div id="modal-parent">
				<Modal
					show={showModal}
					contentLabel="Screen Size Message"
					onHide={() => setShowModal(false)}
				>
					<div className="modal-content">
						<h2>
							Please view this app on a larger screen for a better experience.
							<br />
							<br />
							For best experience please view on an 13" screen or larger.
						</h2>
						<button onClick={() => setShowModal(false)}>Close</button>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default App;
