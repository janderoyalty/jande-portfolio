import React from "react";
import "./Contact.css";

import JandeFro from "../images/Jande Royalty afro photo with pink background.png";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { Row, Col, Image } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="content" id="my-contact">
      <Row id="my-contact--container">
        {/* LEFT SIDE */}
        <Col id="my-contact--left" sm={12} md={12} lg={5}>
          <Row id="my-contact--dark-red-box">
            <Image
              src={JandeFro}
              alt="Jande Royalty in Hawaii after a hike"
              rounded
              id="jande-image"
            />
          </Row>
        </Col>

        {/* RIGHT SIDE */}
        <Col id="my-contact--right" sm={12} md={12} lg={7}>
          <Row id="my-contact--header-text">Contact Me</Row>
          <Row className="my-contact--info">
            <div className="my-contact--info--detail">
              <AiOutlineMail size="50px" />
              <Col className="my-contact--text ">
                <a href="mailto: janderoyalty@gmail.com" className="links">
                  janderoyalty@gmail.com
                </a>
              </Col>
            </div>
            <div className="my-contact--info--detail">
              <AiFillLinkedin size="50px" />
              <Col className="my-contact--text ">
                <a
                  className="links"
                  href="https://www.linkedin.com/in/janderoyalty/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/janderoyalty
                </a>
              </Col>
            </div>
            <div className="my-contact--info--detail">
              <AiFillGithub size="50px" />
              <Col className="my-contact--text ">
                <a
                  className="links"
                  href="https://github.com/janderoyalty"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/janderoyalty
                </a>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
