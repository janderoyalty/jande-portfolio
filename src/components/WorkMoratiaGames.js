import React from "react";
import "./Works.css";

import MoratiaGamesMockUp from "../images/Computer Icon - Moratia Games.png"

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const WorkMoratiaGames = () => {
  return (
    <Carousel.Item>
      <Row>
        <Col id="my-works-left" sm={12} md={12} lg={5}>
          <Image
            src={MoratiaGamesMockUp}
            alt="Moratia Games webpage in "
            rounded
            id="my-works-image"
          ></Image>
        </Col>
        <Col id="my-works-right" sm={12} md={12} lg={7}>
          <div className="headers-text" id="race-right--top">
            Moratia Games
          </div>
          <div id="my-works--text-box--entry">
            <div className="body-text" id="race--text-box--entry--body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </Col>
      </Row>
    </Carousel.Item>
  );
};

export default WorkMoratiaGames;
