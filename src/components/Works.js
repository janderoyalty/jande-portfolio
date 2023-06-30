import React from "react";
import "./Works.css";

import MoratiaGamesMockUp from "../images/Computer Icon - Moratia Games.png";
import WeatherReportMockUp from "../images/Computer Icon - Weather Report.png";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { AiFillGithub } from "react-icons/ai";

const Works = () => {
  return (
    <Carousel variant="dark" id="my-works">
      {/* ITEM 1 */}
      <Carousel.Item>
        <Row>
          <Col id="my-works-left" sm={12} md={12} lg={5}>
            <a
              href="https://moratiagames.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={MoratiaGamesMockUp}
                alt="Moratia Games webpage mock up on a laptop screen "
                href
                id="my-works-image"
              ></Image>
            </a>
          </Col>
          <Col id="my-works-right" sm={12} md={12} lg={7}>
            <a
              href="https://moratiagames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-text-link"
            >
              <Row className="header-text">Moratia Games</Row>
            </a>
            <a
              href="https://moratiagames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-text-link"
            >
              <Row className="sub-header-text">website</Row>
            </a>
            <Row className="body-text">
              <p>
                I developed the main website for a game company, showcasing
                their world, products, and updates. Visitors can sign up for a
                newsletter and browse past event photos. As the sole developer,
                I designed the layout, created the mockup, and implemented the
                entire website.
              </p>

              <p>
                While working independently, I faced a challenge connecting the
                form to Firebase since Firebase was a new technology for me at
                the time. With perseverance and help from online resources and
                fellow developers, I successfully resolved the issues.
              </p>

              <p>
                I'm currently optimizing the code and infrastructure for
                improved performance. I provide ongoing support and maintenance,
                continuously adding new sections and functionalities. I
                prioritize security using Firebase's features.
              </p>

              <p>
                Future plans include enhancing the gallery's scalability and
                implementing a login system for easy database updates without
                direct Firebase access.
              </p>
            </Row>
            <Row className="technologies-header-text">
              Technologies
              <a
                href="https://github.com/janderoyalty/moratia-games-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="50px" color="#6D213C" />
              </a>
            </Row>
            <Row className="technologies-container">
              <Col className="technologies-text">React</Col>
              <Col className="technologies-text">React Bootstrap</Col>
              <Col className="technologies-text">Firebase</Col>
              <Col className="technologies-text">JavaScript</Col>
              <Col className="technologies-text">CSS</Col>
            </Row>
          </Col>
        </Row>
      </Carousel.Item>

      {/* ITEM 2 */}
      <Carousel.Item>
        <Row>
          <Col id="my-works-left" sm={12} md={12} lg={5}>
            <a
              href="https://jande-weather-report.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={WeatherReportMockUp}
                alt="Weather Report webpage mock up on a laptop screen "
                href
                id="my-works-image"
              ></Image>
            </a>
          </Col>
          <Col id="my-works-right" sm={12} md={12} lg={7}>
            <a
              href="https://jande-weather-report.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-text-link"
            >
              <Row className="header-text">Weather Report</Row>
            </a>
            <a
              href="https://jande-weather-report.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-text-link"
            >
              <Row className="sub-header-text">website app</Row>
            </a>
            <Row className="body-text">
              <p>
                I developed the main website for a game company, showcasing
                their world, products, and updates. Visitors can sign up for a
                newsletter and browse past event photos. As the sole developer,
                I designed the layout, created the mockup, and implemented the
                entire website.
              </p>

              <p>
                While working independently, I faced a challenge connecting the
                form to Firebase since Firebase was a new technology for me at
                the time. With perseverance and help from online resources and
                fellow developers, I successfully resolved the issues.
              </p>

              <p>
                I'm currently optimizing the code and infrastructure for
                improved performance. I provide ongoing support and maintenance,
                continuously adding new sections and functionalities. I
                prioritize security using Firebase's features.
              </p>

              <p>
                Future plans include enhancing the gallery's scalability and
                implementing a login system for easy database updates without
                direct Firebase access.
              </p>
            </Row>
            <Row className="technologies-header-text">
              Technologies
              <a
                href="https://github.com/janderoyalty/weather-report"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  size="50px"
                  color="#6D213C"
                  title="Weather Report Frontend"
                />
              </a>
            </Row>
            <Row className="technologies-container">
              <Col className="technologies-text">JavaScript</Col>
              <Col className="technologies-text">HTML</Col>
              <Col className="technologies-text">CSS</Col>
            </Row>
            <Row className="technologies-header-text">
              <a
                href="https://github.com/janderoyalty/weather-report-proxy-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  size="50px"
                  color="#6D213C"
                  title="Weather Report Backend"
                />
              </a>
            </Row>
            <Row className="technologies-container">
              <Col className="technologies-text">Python</Col>
              <Col className="technologies-text">Flask</Col>
            </Row>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default Works;
