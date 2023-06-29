import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Jande_Royalty_logo.png"
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar
        id="navi-bar"
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
              src={logo} // Logo overlay color #6d213c
              alt="Jande Royalty logo"
              height="25em"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link id="nav-words" href="#works">My Works</Nav.Link>
              <Nav.Link id="nav-resume" href="#resume">My Resume</Nav.Link>
              <Nav.Link id="nav-contacts" href="#contact">My Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
