import React, { useState, useEffect } from "react";
import "./Navigation.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

import logo from "../images/Jande_Royalty_logo.png";

const Navigation = () => {
  return (
    <>
      <Navbar
        // id={navTransparency}
        id="navi-bar"
        sticky="top"
        expand="lg"
        collapseOnSelect="true"
        role="navigation"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <div id="nav-img-container">
              <img
                id="nav-img"
                src={logo} // Logo overlay color #6d213c
                alt="Jande Royalty logo"
              />
            </div>
          </Navbar.Brand>
          {/* <Navbar.Brand href="#home">
            <img
              id="nav-img"
              src={logo} // Logo overlay color #6d213c
              alt="Jande Royalty logo"
            />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="nav-item" id="nav-words" href="#my-works">
                My Projects
              </Nav.Link>
              <Nav.Link className="nav-item" id="nav-words" href="#my-skills">
                My Skills
              </Nav.Link>

              <Nav.Link
                className="nav-item"
                id="nav-contacts"
                href="#my-contact"
              >
                My Contact
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                id="nav-resume"
                target="_blank"
                rel="noopener noreferrer"
                href="https://acrobat.adobe.com/id/urn:aaid:sc:us:8e7b3f69-a3be-4717-9ffd-18cbec2abfd9"
              >
                My Resume <FaExternalLinkAlt size=".5em" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
