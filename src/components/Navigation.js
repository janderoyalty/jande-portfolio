import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Jande_Royalty_logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [navTransparency, setNavTransparency] = useState("navi-bar");

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(typeof window);
      window.addEventListener("scroll", () =>
        setNavTransparency("navi-bar--scroll")
      );
    } else if (typeof window !== "object") {
      console.log(typeof window);
      window.addEventListener("scroll", () => setNavTransparency("navi-ba"));
    }
  }, []);

  return (
    <>
      <Navbar
        id={navTransparency}
        // bg="light"
        // variant="light"
        sticky="top"
        expand="lg"
        collapseOnSelect="true"
        role="navigation"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              id="nav-img"
              src={logo} // Logo overlay color #6d213c
              alt="Jande Royalty logo"
              height="35em"
            />
          </Navbar.Brand>
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
                id="nav-resume"
                target="_blank"
                rel="noopener noreferrer"
                href="https://acrobat.adobe.com/id/urn:aaid:sc:US:26e33e78-9a94-430e-a1d8-913f9b8fdad0"
              >
                My Resume
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                id="nav-contacts"
                href="#my-contact"
              >
                My Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
