import React from "react";
import "./ProjectItem.css";

import TechnologiesList from "./TechnologiesList";
import GitHubLinks from "./GitHubLinks";

import { Row, Col, Image } from "react-bootstrap";
import { FaLink } from "react-icons/fa";

const ProjectItem = ({
	website,
	imageLink,
	imageAlt,
	projectName,
	faLinkTitle,
	projectDecription,
	technologies,
	githubLinks,
}) => {
	return (
		<div className="content" id="project-item">
			<Row className="my-works--container">
				<Col id="my-works-left" sm={12} md={12} lg={5}>
					<a href={website} target="_blank" rel="noopener noreferrer">
						<Image
							src={imageLink}
							alt={imageAlt}
							href
							id="my-works-image"
						></Image>
					</a>
				</Col>
				<Col id="my-works-right" sm={12} md={12} lg={7}>
					<Row className="my-works-right--container">
						<a
							href={website}
							target="_blank"
							rel="noopener noreferrer"
							className="links"
						>
							<Row className="header-text">{projectName}</Row>
						</a>
						<a
							href={website}
							target="_blank"
							rel="noopener noreferrer"
							className="links view-project-link"
						>
							<FaLink
								size="2rem"
								title={faLinkTitle}
								id="view-project-link-icon"
							/>
							<Row className="sub-header-text">view project</Row>
						</a>
						<Row className="body-text">{projectDecription}</Row>
						<Row className="technologies">
							<Row>Technologies</Row>
							<TechnologiesList technologies={technologies} />
							<Row className="technologies--github-row">
								<GitHubLinks githubLinks={githubLinks} />
							</Row>
						</Row>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ProjectItem;
