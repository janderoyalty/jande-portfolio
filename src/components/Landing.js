import React from "react";
import "./Landing.css";

import hawaii from "../images/Jande in Hawaii.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Landing = () => {
  return (
    <Row className="content" id="landing">
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
          id="jande-image"
        ></Image>
      </Col>
    </Row>
  );
};

export default Landing;
