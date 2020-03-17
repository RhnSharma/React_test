import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './../App.css';

const AddBlog = (props) => {
  const  [blog , setBlog]= useState(
    {
      title : '',
      description : '',
      post : '',
      submitted : false,
      errors : null
    }
    );
    let validationErrors;
    let onChangeForm = e => {
      e.preventDefault();
      setBlog({...blog, [e.target.name]: e.target.value });
    }
    let handleSubmit = e => {
      e.preventDefault();
      const { title, description, post } = blog;
      axios.post("/addblogpost",{title, description, post})
      .then(result => {
        console.log(result);
        setBlog(    
        {
            title : '',
            description : '',
            post : '',
            submitted : true,
            errors : null
            }
          );
      })
      .catch(err => {
        validationErrors = err.response.data;
        setBlog({...blog, submitted : false, errors : validationErrors});
      });
    };
 const submission = blog.submitted;
  return (
    <div className='mt-5' style={{'height' : '90vh'}}>
      {submission ? <p className='lead submitted'>Your post is added to the db.</p> 
        : 
      <Container className='mb-5' id='contact'>
      <Row>
      <Col xs='8'>
      <h1 
      className='display-4 text-info' 
      style={{'marginLeft' : '-10px', 'marginBottom':'20px','fontSize':'2rem'}}
      >
      Add Blog - 
      </h1>
      <Form>
    <FormGroup className='mb-5'>
      <Label for="title"> Title : </Label>
      <Input onChange={onChangeForm} type="text" name="title" id="exampletitle" value={blog.title} placeholder="Type your post title here" />
      <p className='errorMessage lead'>{blog.errors && blog.errors.findIndex(x =>x.param === "title") !== -1 ? blog.errors[blog.errors.findIndex(x => x.param === "title")].msg : ''}</p>
    </FormGroup>
    <FormGroup className='mb-5'>
      <Label for="description"> Description : </Label>
      <Input onChange={onChangeForm} type="text" name="description" id="exampledescription" value={blog.description} placeholder="Type your post description here" />
    </FormGroup>
    <FormGroup className='mb-5'>
      <Label for="exampleText"> Post : </Label>
      <Input onChange={onChangeForm} type="textarea" name="post" id="examplepsot" value={blog.post} placeholder="Type your post content here" />
      <p className='errorMessage lead'>{blog.errors && blog.errors.findIndex(x =>x.param === "post") !== -1 ? blog.errors[blog.errors.findIndex(x => x.param === "post")].msg : ''}</p>
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