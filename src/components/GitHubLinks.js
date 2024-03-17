import React from "react";
import "./GitHubLinks.css";

import { Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

const GitHubLinks = ({ githubLinks }) => {
	return (
		<>
			{githubLinks.map((link, index) => (
				<Col key={index} className={`technologies--github`}>
					<a
						href={link.gitHubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="links view-project-link"
					>
						<AiFillGithub
							size={githubLinks.length === 1 ? "2rem" : "1.75rem"}
							title={link.gitHubLinkTitle}
						/>
						{githubLinks.length === 1
							? "View Repo"
							: `View ${link.projectEnd} Repo`}
					</a>
				</Col>
			))}
		</>
	);
};

export default GitHubLinks;
