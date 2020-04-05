import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import './../App.css';

const EditBlog = (props) => {
    const { match } = props;
    let { slug } = match.params;
    const  [blog , setBlog]= useState(
        {
          title : '',
          description : '',
          post : '',
          submitted : false,
          errors : null
        }
        );
  useEffect(()=>{
      axios.get(`/getBlog/${slug}`,{
        headers : {
          'type' : 'application/json'
        }})
        .then(res=>setBlog(res.data))
        .catch(err=>console.log(err));
  },[slug])
    let validationErrors;
    let onChangeForm = e => {
      e.preventDefault();
      setBlog({...blog, [e.target.name]: e.target.value });
    }
    let handleSubmit = e => {
      e.preventDefault();
      const { title, description, post } = blog;
      axios.post(`/editblogpost/${slug}`,{title, description, post})
      .then(result => {
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
    <div className='mt-5' style={{'minHeight' : '80vh'}}>
      {submission ? <p className='lead submitted'>Your post has been updated.</p> 
        : 
      <Container id='editpost'>
      <Form>
      <h1 
      className='display-4 text-info' 
      style={{'marginLeft' : '-10px', 'marginBottom':'20px','fontSize':'2rem'}}
      >
      Update Post - 
      </h1>
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
    <Button color='warning' onClick={handleSubmit}>Update post</Button>
    <Link to='/blogs' className='btn btn-secondary mx-2'>Cancel</Link>
  </Form>
  </Container>
      }
    </div>
  );
}

export default EditBlog;