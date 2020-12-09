import React from "react";
import { Container, Row, Col } from "reactstrap";
import chatapp from "../images/chatapp.jpg";
import calculator from "../images/jscalc.png";
import mailerapp from "../images/mailerapp.jpg";
import { IoMdFolder } from "react-icons/io";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import "./../App.css";

const ProjectsPage = (props) => {
  return (
    <Container className="mb-5 pt-2" id="projects">
      <Row>
        <Col md="8">
          <h1
            className="display-4 mb-3 name title"
            style={{ fontSize: "2rem" }}
          >
            <IoMdFolder /> Projects
          </h1>
          <div className="card text-white bg-dark mb-4">
            <img
              className="card-img-top"
              src={mailerapp}
              alt="Mailer app"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Mailer App</h5>
              <p className="card-text">
                A mailer made using Nodejs, cron and nodemailer.
              </p>
              <div className="sub">
                <div className="subleft">
                  <p className="text-muted">
                    nodejs &nbsp; cron &nbsp; nodemailer
                  </p>
                </div>
                <div className="subright">
                  <a
                    href="https://github.com/RhnSharma/mailer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className="link"
                      color="white"
                      title="Github repository link"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white bg-dark mb-4">
            <img className="card-img-top" src={chatapp} alt="Chat app"></img>
            <div className="card-body">
              <h5 className="card-title">Chat App</h5>
              <p className="card-text">
                A Chat-App made using Nodejs and Socket.io.
              </p>
              <div className="sub">
                <div className="subleft">
                  <p className="text-muted">
                    nodejs &nbsp; expressjs &nbsp; socketio
                  </p>
                </div>
                <div className="subright">
                  <a
                    href="https://young-temple-48299.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkSquareAlt
                      className="link"
                      color="white"
                      title="Chat app link"
                    />
                  </a>
                  <a
                    href="https://github.com/RhnSharma/node-chat-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className="link"
                      color="white"
                      title="Github repository link"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white bg-dark">
            <img
              className="card-img-top"
              src={calculator}
              alt="Calculator app"
            ></img>
            <div className="card-body">
              <h5 className="card-title"> Javascript Calculator</h5>
              <p className="card-text">A Calculator Made Using jQuery.</p>
              <div className="sub">
                <div className="subleft">
                  <p className="text-muted">
                    html &nbsp; css &nbsp; javascript
                  </p>
                </div>
                <div className="subright">
                  <a
                    href="https://codepen.io/rhnsharma5113/full/yovXVv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkSquareAlt
                      className="link"
                      color="white"
                      title="Calculator app link"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
