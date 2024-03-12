import React from "react";
import "./Contact.css";

import JandeFro from "../images/Jande Royalty afro photo with pink background.png";

import { Row, Col, Form, Button, Image } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="content" id="my-contact">
      <Row id="my-contact--container">
        <Col id="my-contact--left" sm={12} md={12} lg={6}>
          <Row id="my-contact--dark-red-box">
            <Image
              src={JandeFro}
              alt="Jande Royalty in Hawaii after a hike"
              rounded
              id="jande-image"
            />
          </Row>
        </Col>
        <Col id="my-contact--right" sm={12} md={12} lg={6}>
          <Row id="my-contact--header-text">Contact Me</Row>
          <Row id="my-contact--header-text--form">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="my-contact--form-header">
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="my-contact--form-header">
                  Message
                </Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                id="my-contact--form-button"
              >
                Submit
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
