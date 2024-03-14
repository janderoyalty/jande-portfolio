import React from "react";
import "./Landing.css";

import hawaii from "../images/Jande in Hawaii.png";

import { Row, Col, Image } from "react-bootstrap";

const Landing = () => {
	return (
		<div id="landing">
			<Row className="content" id="landing-container">
				<Col
					className="landing--left"
					sm={{ span: 12, order: 2 }}
					md={{ span: 12, order: 2 }}
					lg={{ span: 6, order: 1 }}
				>
					<Row id="landing--left--top">
						<h1 id="landing--left--top--name">Hi! My name is Jande.</h1>
						<div id="landing--left--top--pronounciation">
							<div>
								It sounds like “Andy” with a “J” but it’s not spelled that way.
							</div>
							{/* <div></div> */}
						</div>
					</Row>
					<Row id="landing--left--bottom">
						A life-long learner & software engineer!
					</Row>
				</Col>
				<Col
					className="landing--right"
					sm={{ span: 12, order: 1 }}
					md={{ span: 12, order: 1 }}
					lg={{ span: 6, order: 2 }}
				>
					<Image
						src={hawaii}
						alt="Jande Royalty in Hawaii after a hike"
						rounded
						id="landing--jande-image"
					></Image>
				</Col>
			</Row>
		</div>
	);
};

export default Landing;
