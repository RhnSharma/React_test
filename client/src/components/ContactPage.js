import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import axios from "axios";
import "./../App.css";

const ContactPage = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    errors: null,
    isLoading: false,
    disabled: false,
  });
  let validationErrors;
  let onChangeForm = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, isLoading: true, disabled: true });
    const { name, email, message } = user;
    axios
      .post("/submit", { name, email, message })
      .then(() => {
        setUser({
          name: "",
          email: "",
          message: "",
          submitted: true,
          errors: null,
          isLoading: false,
        });
      })
      .catch((err) => {
        validationErrors = err.response.data;
        setUser({
          ...user,
          submitted: false,
          errors: validationErrors,
          isLoading: false,
          disabled: false,
        });
      });
  };
  const submission = user.submitted;
  return (
    <div>
      {submission ? (
        <p className="lead submitted">Thank you for submitting the form!</p>
      ) : (
        <Container className="mb-5 pt-2" id="contact">
          <Row>
            <Col md="8">
              <h1
                className="display-4 name title"
                style={{
                  marginLeft: "-10px",
                  marginBottom: "20px",
                  fontSize: "2rem",
                }}
              >
                <IoMdContacts /> Contact Me
              </h1>
              <Form>
                <FormGroup>
                  <Label for="name">
                    {" "}
                    <FaUserAlt style={{ marginRight: "2px" }} /> Name :{" "}
                  </Label>
                  <Input
                    onChange={onChangeForm}
                    type="name"
                    name="name"
                    id="examplename"
                    value={user.name}
                    placeholder="Type your name here"
                  />
                  <p className="errorMessage lead">
                    {user.errors &&
                    user.errors.findIndex((x) => x.param === "name") !== -1
                      ? user.errors[
                          user.errors.findIndex((x) => x.param === "name")
                        ].msg
                      : ""}
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label for="email">
                    {" "}
                    <MdEmail style={{ marginRight: "2px" }} /> Email :{" "}
                  </Label>
                  <Input
                    onChange={onChangeForm}
                    type="email"
                    name="email"
                    id="exampleemail"
                    value={user.email}
                    placeholder="Type your email here"
                  />
                  <p className="errorMessage lead">
                    {user.errors &&
                    user.errors.findIndex((x) => x.param === "email") !== -1
                      ? user.errors[
                          user.errors.findIndex((x) => x.param === "email")
                        ].msg
                      : ""}
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">
                    {" "}
                    <MdMessage style={{ marginRight: "2px" }} /> Message :{" "}
                  </Label>
                  <Input
                    onChange={onChangeForm}
                    type="textarea"
                    name="message"
                    value={user.message}
                    id="exampleText"
                    placeholder="Type your message here"
                  />
                  <p className="errorMessage lead">
                    {user.errors &&
                    user.errors.findIndex((x) => x.param === "message") !== -1
                      ? user.errors[
                          user.errors.findIndex((x) => x.param === "message")
                        ].msg
                      : ""}
                  </p>
                </FormGroup>
                <Button disabled={user.disabled} onClick={handleSubmit}>
                  {user.isLoading ? "Submitting..." : "Submit"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ContactPage;
