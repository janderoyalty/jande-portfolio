import React from "react";
import "./Contact2.css";

import hawaii from "../images/Jande in Hawaii.png";

import { Row, Col, Image } from "react-bootstrap";

const Contact2 = () => {
  return (
    <div className="content" id="contact2">
    <Row className="content" id="home">
      <Col id="landing--left" sm={12} md={12} lg={6}>
        <Row id="landing--left--top">
          <h1 id="landing--left--top--name">Hi! My name is Jande.</h1>
          <div id="landing--left--top--pronounciation">
            <div>It sounds like “Andy” with a “J”,</div>
            <div>but it’s not spelled that way.</div>
          </div>
        </Row>
        <Row id="landing--left--bottom">
          A life-long learner & software engineer!
        </Row>
      </Col>
      <Col id="landing--right" sm={12} md={12} lg={6}>
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

export default Contact2;
