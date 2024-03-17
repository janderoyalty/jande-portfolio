import React from "react";

const TechnologiesList = ({ technologies }) => {
	return (
		<div className="technologies--github-techs">
			{technologies.map((tech, index) => (
				<div className="technologies-text" key={index}>
					{tech}
				</div>
			))}
		</div>
	);
};

export default TechnologiesList;
