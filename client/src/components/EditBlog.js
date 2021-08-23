import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import hljs from 'highlight.js';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import './../App.css';

hljs.configure({
  useBR:false,
  languages: ['javascript', 'java', 'html', 'xml','sql','typescript', 'css']
});

const EditBlog = (props) => {
  const modules = {
    syntax: true, 
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ]
  }
  
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'code-block'
  ]
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
      const [convertedText, setConvertedText] = useState("");
  useEffect(()=>{
      axios.get(`/getBlog/${slug}`,{
        headers : {
          'type' : 'application/json'
        }})
        .then(res=> {
          setBlog(res.data);
          setConvertedText(res.data.post)
        } )
        .catch(err=>console.log(err));
  },[slug])
    let validationErrors;
    let onChangeForm = e => {
      e.preventDefault();
      setBlog({...blog, [e.target.name]: e.target.value });
    }
    let handleSubmit = e => {
      e.preventDefault();
      const { title, description } = blog;
      axios.post(`/editblogpost/${slug}`,{title, description, post:convertedText})
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
      <p className='errorMessage lead'>{blog.errors && blog.errors.findIndex(x =>x.param === "description") !== -1 ? blog.errors[blog.errors.findIndex(x => x.param === "description")].msg : ''}</p>
    </FormGroup>
    <div>
    <Label for="post"> Post : </Label>
      <ReactQuill
        theme='snow'
        value={convertedText}
        modules={modules}
        formats={formats}
        onChange={setConvertedText}
        style={{minHeight: '300px', background:"#fff", color:"#000", marginBottom:"2%"}}
      />
      <p className='errorMessage lead'>{blog.errors && blog.errors.findIndex(x =>x.param === "post") !== -1 ? blog.errors[blog.errors.findIndex(x => x.param === "post")].msg : ''}</p>
    </div>
    <Button color='warning' onClick={handleSubmit}>Update post</Button>
    <Link to='/blogs' className='btn btn-secondary mx-2'>Cancel</Link>
  </Form>
  </Container>
      }
    </div>
  );
}

export default EditBlog;