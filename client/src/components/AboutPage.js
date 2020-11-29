import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../images/myimage.svg";
import { IoMdPerson } from "react-icons/io";
import "./../App.css";

const AboutPage = (props) => {
  return (
    <Container className="mb-5 pt-2" id="about">
      <Row>
        <Col md="6">
          <h1 className="display-4 name title" style={{ fontSize: "2rem" }}>
            <IoMdPerson />
            Who am I?
          </h1>
          <p className="lead content">
            A designer, a developer. Currently making websites!
          </p>
        </Col>
        <Col md="6" className="text-center">
          <img
            src={profile}
            className="profile-image img-fluid"
            alt="profile"
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
