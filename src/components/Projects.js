import React from "react";
import "./Projects.css";

// Images
import MoratiaGamesMockUp from "../images/Computer Icon - Moratia Games.png";
import WeatherReportMockUp from "../images/Computer Icon - Weather Report.png";
import InspoBoardMockUp from "../images/Computer Icon - Inspo Board.png";

import ProjectItem from "./ProjectItem";

// Bootstrap
import { Carousel } from "react-bootstrap";

const Projects = () => {
	const projectDescriptions = [
		`I developed the main website for a game company, showcasing their world, products, and updates. Visitors can sign up for a newsletter and browse past event photos. As the sole developer, I designed the layout, created the mockup, and implemented the entire website.
	
While working independently, I faced a challenge connecting the form to Firebase since Firebase was a new technology for me at the time. With perseverance and help from online resources and fellow developers, I successfully resolved the issues.
	
I'm currently optimizing the code and infrastructure for improved performance. I provide ongoing support and maintenance, continuously adding new sections and functionalities. I prioritize security using Firebase's features.
	
Future plans include enhancing the gallery's scalability and implementing a login system for easy database updates without direct Firebase access.
`,
		`I was thrilled to complete my first full-stack Javascript project! My main goal was to create an engaging weather app that displays real-time information to users. To achieve this, I utilized the Open Weather API and the Locations IQ API, ensuring secure and authenticated requests by adhering to the API documentation and utilizing API keys.

Despite encountering challenges with CSS styling and adapting the code to handle the startup delay of the backend, I conducted thorough usability and manual testing throughout development. This allowed me to address challenges and ensure a smoother user experience for users.

I am committed to ongoing maintenance and support for the app, with plans to introduce exciting features to enrich the user experience further. A mobile-friendly version is also in the works and will be available soon. Overall, I am confident in the success of my project and look forward to its continued growth and development.
		`,
		`This full-stack project aimed to create a digital platform mirroring the uplifting ambiance of an office inspiration board. Users could create and select boards, view associated cards, and interact by giving a "+1" to agreeable messages. 

The project involved collaboration among a three-person team, each member contributing various aspects. While I primarily focused on frontend development, including creating the wireframing and mock-up creation and implementing the CSS code, I also played a crucial role in backend development.

I wrote Board routes in the backend, collaborated with team members who handled Card routes, and ensured seamless integration of frontend and backend layers. Additionally, I led the database setup alongside my team members and contributed to creating conventional RESTful CRUD routes for model interactions. 

The group followed Agile methodologies using Trello to track our progress and conducted tests to ensure the endpoints of the API functioned appropriately. The project focused on establishing a seamless interaction between frontend and backend layers. 

I currently oversee the deployment and maintenance of the project, ensuring its continued functionality.`,
	];
	return (
		<div id="my-works">
			<Carousel variant="dark" interval="10000" touch="True">
				{/* ITEM 1: MORATIA GAMES */}
				<Carousel.Item>
					<ProjectItem
						website="https://moratiagames.com/"
						imageLink={MoratiaGamesMockUp}
						imageAlt="Moratia Games webpage mock up on a laptop screen"
						projectName="Moratia Games"
						faLinkTitle="Weather Report Website"
						projectDecription={
							<pre className="body-text">{projectDescriptions[0]}</pre>
						}
						technologies={[
							"Firebase",
							"React JS",
							"React Bootstrap",
							"JavaScript",
							"CSS",
						]}
						githubLinks={[
							{
								projectName: "project_1",
								gitHubLink: "https://github.com/janderoyalty/moratia-games-fe",
								gitHubLinkTitle: "Moratia Games Frontend",
							},
						]}
					></ProjectItem>
				</Carousel.Item>
				{/* ***************************************ITEM 2*************************************** */}
				<Carousel.Item>
					<ProjectItem
						website="https://jande-weather-report.onrender.com/"
						imageLink={WeatherReportMockUp}
						imageAlt="Weather Report webpage mock up on a laptop screen"
						projectName="Weather Report"
						faLinkTitle="Weather Report Website"
						projectDecription={
							<pre className="body-text">{projectDescriptions[1]}</pre>
						}
						technologies={["Python", "JavaScript", "HTML", "CSS"]}
						githubLinks={[
							{
								projectName: "project_1",
								gitHubLink: "https://github.com/janderoyalty/weather-report",
								gitHubLinkTitle: "Weather Report Backend",
								projectEnd: "FE",
							},
							{
								projectName: "project_2",
								gitHubLink:
									"https://github.com/janderoyalty/weather-report-proxy-server",
								gitHubLinkTitle: "Weather Report Frontend",
								projectEnd: "BE",
							},
						]}
					></ProjectItem>
				</Carousel.Item>
				{/* ***************************************ITEM 3*************************************** */}
				<Carousel.Item>
					<ProjectItem
						website="https://inspo-board-fe.onrender.com/"
						imageLink={InspoBoardMockUp}
						imageAlt="Inspo Board webpage mock up on a laptop screen"
						projectName="Inspo Board"
						faLinkTitle="Inspo Board Website"
						projectDecription={
							<pre className="body-text">{projectDescriptions[2]}</pre>
						}
						technologies={[
							"Postgres",
							"Python",
							"React JS",
							"Javascript",
							"CSS",
						]}
						githubLinks={[
							{
								projectName: "project_1",
								gitHubLink: "https://github.com/janderoyalty/inspo-board-FE",
								gitHubLinkTitle: "Inspo Board Frontend",
								projectEnd: "FE",
							},
							{
								projectName: "project_2",
								gitHubLink: "https://github.com/janderoyalty/inspo-board-BE",
								gitHubLinkTitle: "Inspo Board Backend",
								projectEnd: "BE",
							},
						]}
					></ProjectItem>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Projects;
