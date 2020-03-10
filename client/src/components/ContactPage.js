import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import { IoMdImage, IoMdContacts } from "react-icons/io";
import axios from 'axios';
import './../App.css';

const ContactPage = (props) => {
  const  [user , setUser]= useState(
    {
      name : '',
      email : '',
      message : '',
      image : '',
      submitted : false,
      errors : null
    }
    );
    let validationErrors;
    let onChangeForm = e => {
      e.preventDefault();
      switch (e.target.name) {
        case 'image':
         setUser({...user, [e.target.name]: e.target.files[0] });
          break;
        default:
          setUser({...user, [e.target.name]: e.target.value });
      }
    }
    let handleSubmit = e => {
      e.preventDefault();
      const { name, email, message, image } = user;
      let formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('image', image);
      axios.post("/submit",formData)
      .then(result => {
        console.log(result);
        document.getElementById("exampleFile").value = "";
        setUser(    
          {
          name : '',
          email : '',
          message : '',
          image : '',
          submitted : true,
          errors : null
        }
          );
      })
      .catch(err => {
        validationErrors = err.response.data;
        setUser({...user, submitted : false, errors : validationErrors});
      });
    };
 const submission = user.submitted;
  return (
    <div>
      {submission ? (
        <p className='lead submitted'>Thank you for submitting the form!</p>
      ) : (
        <Container className='mb-5' id='contact'>
        <Row>
        <Col xs='8'>
        <h1 
        className='display-4 text-info' 
        style={{'marginLeft' : '-10px', 'marginBottom':'20px','fontSize':'2rem'}}
        >
       <IoMdContacts />  Contact Me
        </h1>
        <Form>
      <FormGroup>
        <Label for="name"> <FaUserAlt style={{'marginRight':'2px'}} /> Name : </Label>
        <Input onChange={onChangeForm} type="name" name="name" id="examplename" value={user.name} placeholder="Type your name here" />
        <p className='errorMessage lead'>{user.errors && user.errors.findIndex(x =>x.param === "name") !== -1 ? user.errors[user.errors.findIndex(x => x.param === "name")].msg : ''}</p>
      </FormGroup>
      <FormGroup>
        <Label for="email"> <MdEmail style={{'marginRight':'2px'}} /> Email : </Label>
        <Input onChange={onChangeForm} type="email" name="email" id="exampleemail" value={user.email} placeholder="Type your email here" />
        <p className='errorMessage lead'>{user.errors && user.errors.findIndex(x =>x.param === "email") !== -1 ? user.errors[user.errors.findIndex(x => x.param === "email")].msg : ''}</p>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile"> <IoMdImage style={{'marginRight':'2px'}} /> Image (Only .jpg and .png) : </Label>
        <Input onChange= {onChangeForm} type="file" name="image" id="exampleFile" />
        <p className='errorMessage lead'>{user.errors && user.errors.findIndex(x =>x.param === "image") !== -1 ? user.errors[user.errors.findIndex(x => x.param === "image")].msg : ''}</p>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText"> <MdMessage style={{'marginRight':'2px'}} /> Message : </Label>
        <Input onChange={onChangeForm} type="textarea" name="message" value={user.message} id="exampleText" placeholder="Type your message here" />
        <p className='errorMessage lead'>{user.errors && user.errors.findIndex(x =>x.param === "message") !== -1 ? user.errors[user.errors.findIndex(x => x.param === "message")].msg : ''}</p>
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
        </Col>
        </Row>
    </Container>
      )}
    </div>
  );
}

export default ContactPage;