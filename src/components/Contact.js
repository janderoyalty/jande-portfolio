import React from "react";
import "./Contact.css";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <div className="content" id="my-contact">
      <Col>
        <Row>Contact Me</Row>
        <Row>FORM</Row>
      </Col>
      <Col>RIGHT</Col>
    </div>
  );
};

export default Contact;
