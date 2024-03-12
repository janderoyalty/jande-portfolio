import React from "react";
import "./Skills.css";
import { Row, Col } from "react-bootstrap";

// Images
import Image from "react-bootstrap/Image";
import pick from "../images/Jande_skills_image_back.png";

// Icons
import {
  IoLogoPython,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import {
  SiMysql,
  SiPytest,
  SiPostman,
  SiTrello,
  SiFigma,
  SiAdobecreativecloud,
} from "react-icons/si";
import { CPlusPlus, Postgresql } from "@styled-icons/boxicons-logos";
import { Microsoftazure } from "@styled-icons/simple-icons";
import { Git, Github } from "@styled-icons/bootstrap";

const Skills = () => {
  return (
    <div className="content" id="my-skills">
      <Row id="my-skills--header-text">Skills</Row>

      <Row className="my-skills--row">
        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoPython className="skill-icon" title="Python" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoJavascript
            className="skill-icon"
            title="Javascript"
            size="85px"
          />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <CPlusPlus className="skill-icon" title="C++" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoHtml5 className="skill-icon" title="HTML" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoCss3 className="skill-icon" title="CSS" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoReact className="skill-icon" title="React" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <DiDjango className="skill-icon" title="Django" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Postgresql className="skill-icon" title="PostgreSQL" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiMysql className="skill-icon" title="MySQL" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <IoLogoFirebase className="skill-icon" title="Firebase" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Microsoftazure className="skill-icon" title="Azure" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiPytest className="skill-icon" title="Pytest" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Git className="skill-icon" title="Git" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <Github className="skill-icon" title="Github" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiPostman className="skill-icon" title="Postman" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiTrello className="skill-icon" title="Trello" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiFigma className="skill-icon" title="Figma" size="85px" />
        </Col>

        <Col className="my-skills--col">
          <Image
            src={pick}
            alt="pick shape"
            rounded
            className="pick-shape"
          ></Image>
          <SiAdobecreativecloud
            className="skill-icon"
            title="Adobe Creative Cloud"
            size="85px"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
