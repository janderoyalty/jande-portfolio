import React from "react";
import "./Projects2.css";

// Images
import MoratiaGamesMockUp from "../images/Mockup bg Moratia Games.png";
import WeatherReportMockUp from "../images/Mockup bg Weather Report.png";

// Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Icons
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

const Projects2 = () => {
  return (
    <div id="my-works">
      <Carousel variant="dark">
        {/* ITEM 1: MORATIA GAMES */}
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
                className="links"
              >
                <Row className="header-text">Moratia Games</Row>
              </a>
              <a
                href="https://moratiagames.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="links view-project-link"
              >
                <FaLink
                  size="2rem"
                  title="Weather Report Website"
                  id="view-project-link-icon"
                />
                <Row className="sub-header-text">view project</Row>
              </a>
              <Row className="body-text">
                <p>
                  I developed the main website for a game company, showcasing
                  their world, products, and updates. Visitors can sign up for a
                  newsletter and browse past event photos. As the sole
                  developer, I designed the layout, created the mockup, and
                  implemented the entire website.
                </p>

                <p>
                  While working independently, I faced a challenge connecting
                  the form to Firebase since Firebase was a new technology for
                  me at the time. With perseverance and help from online
                  resources and fellow developers, I successfully resolved the
                  issues.
                </p>

                <p>
                  I'm currently optimizing the code and infrastructure for
                  improved performance. I provide ongoing support and
                  maintenance, continuously adding new sections and
                  functionalities. I prioritize security using Firebase's
                  features.
                </p>

                <p>
                  Future plans include enhancing the gallery's scalability and
                  implementing a login system for easy database updates without
                  direct Firebase access.
                </p>
              </Row>
              <Row className="technologies">
                <Row>Technologies</Row>
                <div className="technologies--github-techs">
                  <div className="technologies-text">Firebase</div>
                  <div className="technologies-text">React</div>
                  <div className="technologies-text">React Bootstrap</div>
                  <div className="technologies-text">JavaScript</div>
                  <div className="technologies-text">CSS</div>
                </div>
                <Row id="technologies--github-row">
                  <Col id="technologies--github-be">
                    <a
                      href="https://github.com/janderoyalty/moratia-games-fe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links view-project-link"
                    >
                      <AiFillGithub
                        size="1.75rem"
                        title="Weather Report Backend"
                        // id="github-link-icon"
                      />
                      View Repo
                    </a>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
        {/* ITEM 2: WEATHER REPORT */}
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
                className="links"
              >
                <Row className="header-text">Weather Report</Row>
              </a>
              <a
                href="https://jande-weather-report.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="links view-project-link"
              >
                <div id="view-project-link-icon">
                  <FaLink
                    size="2rem"
                    // color="#6D213C"
                    title="Weather Report Website"
                  />
                </div>
                <Row className="sub-header-text">view project</Row>
              </a>
              <Row className="body-text">
                <p>
                  I was thrilled to complete my first full-stack Javascript
                  project! My main goal was to create an engaging weather app
                  that displays real-time information to users. To achieve this,
                  I utilized the Open Weather API and the Locations IQ API,
                  ensuring secure and authenticated requests by adhering to the
                  API documentation and utilizing API keys.
                </p>

                <p>
                  Despite encountering challenges with CSS styling and adapting
                  the code to handle the startup delay of the backend, I
                  conducted thorough usability and manual testing throughout
                  development. This allowed me to address challenges and ensure
                  a smoother user experience for users.
                </p>

                <p>
                  I am committed to ongoing maintenance and support for the app,
                  with plans to introduce exciting features to enrich the user
                  experience further. A mobile-friendly version is also in the
                  works and will be available soon. Overall, I am confident in
                  the success of my project and look forward to its continued
                  growth and development.
                </p>
              </Row>
              <Row className="technologies">
                <Row>Technologies</Row>
                <div className="technologies--github-techs">
                  <div className="technologies-text">JavaScript</div>
                  <div className="technologies-text">Python</div>
                  <div className="technologies-text">HTML</div>
                  <div className="technologies-text">CSS</div>
                </div>
                <Row id="technologies--github-row">
                  <Col id="technologies--github-be">
                    <a
                      href="https://github.com/janderoyalty/weather-report"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links view-project-link"
                    >
                      <AiFillGithub
                        size="1.75rem"
                        title="Weather Report Backend"
                        // id="github-link-icon"
                      />
                      View BE Repo
                    </a>
                  </Col>
                  <Col id="technologies--github-fe">
                    <a
                      href="https://github.com/janderoyalty/weather-report-proxy-server"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links view-project-link"
                    >
                      <AiFillGithub
                        size="1.75rem"
                        title="Weather Report Frontend"
                        // id="github-link-icon"
                      />
                      View FE Repo
                    </a>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects2;
