import React from "react";
import "./Footer.css";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="content" id="my-footer">
      <Row>
        <Col className="footer-info">
          <a href="mailto: janderoyalty@gmail.com" className="links">
            janderoyalty@gmail.com
          </a>
        </Col>
        <Col>
          <Row id="social-icons-container">
            <Col className="social-icons">
              <a
                href="https://www.linkedin.com/in/janderoyalty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size="35px" color="#6D213C"></AiFillLinkedin>
              </a>
            </Col>
            <Col className="social-icons">
              <a
                href="https://github.com/janderoyalty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="35px" color="#6D213C"></AiFillGithub>
              </a>
            </Col>
          </Row>
        </Col>
        <Col className="footer-info">
          <a href="tel:6155385787" className="links">
            615.538.5787
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
