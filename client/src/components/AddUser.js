import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './../App.css';

const AddBlog = (props) => {
  const  [user , setUser]= useState(
    {
      email : '',
      password : '',
      submitted : false
    }
    );
    let onChangeForm = e => {
      e.preventDefault();
      setUser({...user, [e.target.name]: e.target.value });
    }
    let handleSubmit = e => {
      e.preventDefault();
      const { email, password } = user;
      axios.post("/adduser",{ email, password })
      .then(result => {
        console.log(result);
        setUser(    
        {
            email : '',
            password : '',
            submitted : true
            }
          );
      })
      .catch(err => {
        setUser({...user, submitted : false});
      });
    };
 const submission = user.submitted;
  return (
    <div className='mt-5' style={{'height' : '90vh'}}>
      {submission ? <p className='lead submitted'>User is added to the db.</p> 
        : 
      <Container className='mb-5' id='contact'>
      <Row>
      <Col xs='8'>
      <h1 
      className='display-4 text-info' 
      style={{'marginLeft' : '-10px', 'marginBottom':'20px','fontSize':'2rem'}}
      >
      Add User - 
      </h1>
      <Form>
    <FormGroup className='mb-5'>
      <Label for="title"> Email : </Label>
      <Input onChange={onChangeForm} type="email" name="email" id="exampleemail" value={user.email} placeholder="Type your email here" />
    </FormGroup>
    <FormGroup className='mb-5'>
      <Label for="description"> Password :  </Label>
      <Input onChange={onChangeForm} type="password" name="password" id="examplepassword" value={user.password} placeholder="Type your password here" />
    </FormGroup>
    <Button onClick={handleSubmit}>Save</Button>
  </Form>
      </Col>
      </Row>
  </Container>
      }
    </div>
  );
}

export default AddBlog;