import React from "react";
import "./Contact2.css";

import JandeFro from "../images/Jande Royalty afro photo with pink background.png";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { Row, Col, Image } from "react-bootstrap";

const Contact2 = () => {
  return (
    <div className="content" id="my-contact">
      <Row className="content" id="home">
        <Col id="my-contact--left" sm={12} md={12} lg={6}>
          <Image
            src={JandeFro}
            alt="Jande Royalty in Hawaii after a hike"
            rounded
            id="my-contact--jande-image"
          ></Image>
        </Col>
        <Col id="my-contact--right" sm={12} md={12} lg={6}>
          <Row id="my-contact--right--container">
            <h1 id="my-contact--right--container--header">Contact Me</h1>
            <Row id="my-contact--right--container--links">
              <Col>
                <AiOutlineMail size="50px" />
                <a
                  href="mailto: janderoyalty@gmail.com"
                  className="links my-contact--links"
                >
                  janderoyalty@gmail.com
                </a>
              </Col>
              <Col>
                <AiFillLinkedin size="50px" />
                <a
                  className="links my-contact--links"
                  href="https://www.linkedin.com/in/janderoyalty/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/janderoyalty
                </a>
              </Col>
              <Col>
                <AiFillGithub size="50px" />
                <a
                  className="links my-contact--links"
                  href="https://github.com/janderoyalty"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/janderoyalty
                </a>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact2;
