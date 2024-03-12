import React from "react";
import "./Skills.css";
import { Row, Col } from "react-bootstrap";

// Images
import Image from "react-bootstrap/Image";
import pick from "../images/Jande's image back.png";
import {
  IoLogoPython,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { SiMysql, SiPytest, SiPostman, SiTrello, SiFigma, SiAdobecreativecloud } from "react-icons/si";

import { CPlusPlus, Postgresql } from "@styled-icons/boxicons-logos";
import { Microsoftazure } from "@styled-icons/simple-icons";
import { Git, Github } from "@styled-icons/bootstrap";

const Skills = () => {
  return (
    <div className="content" id="my-skills">
      <Row id="my-skills--header-text">Skills</Row>

      {/* ************1st Skill Row************ */}
      <Row className="my-skills--row">
        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoPython className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoJavascript className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <CPlusPlus className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoHtml5 className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoCss3 className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoReact className="skill-icon" size="85px" />
        </Col>
      </Row>

      {/* ************2nd Skill Row************ */}
      <Row className="my-skills--row">
        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <DiDjango className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Postgresql className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiMysql className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoFirebase className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Microsoftazure className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiPytest className="skill-icon" size="85px" />
        </Col>
      </Row>

      {/* ************3rd Skill Row************ */}
      <Row className="my-skills--row">
        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Git className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Github className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiPostman className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiTrello className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiFigma className="skill-icon" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiAdobecreativecloud className="skill-icon" size="85px" />
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
