import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import './../App.css';

const Login = (props) => {
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
    let onSubmit = (event) => {
    event.preventDefault();
    const {email,password} = user;
    axios.post('/authenticate', {email, password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }
 const submission = user.submitted;
  return (
    <div className='mt-5' style={{'minHeight' : '80vh'}}>
      {submission ? <p className='lead submitted'>User is registered in the db.</p> 
        : 
      <Container id='login'>
      <Form>
      <h1 
      className='display-4 text-info' 
      style={{'marginLeft' : '-10px', 'marginBottom':'20px','fontSize':'2rem'}}
      >
      Login - 
      </h1>
    <FormGroup className='mb-5'>
      <Label for="title"> Email : </Label>
      <Input onChange={onChangeForm} type="email" name="email" id="exampleemail" value={user.email} placeholder="Type your email here" />
    </FormGroup>
    <FormGroup className='mb-5'>
      <Label for="description"> Password :  </Label>
      <Input onChange={onChangeForm} type="password" name="password" id="examplepassword" value={user.password} placeholder="Type your password here" />
    </FormGroup>
    <Button onClick={onSubmit}>Login</Button>
  </Form>
  </Container>
      }
    </div>
  );
}

export default Login;