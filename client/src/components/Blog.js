import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaClock } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';
import './../App.css';

const Blog = (props) => {
    const { match } = props;
    let { slug } = match.params;
  const [post, setPost] = useState([]);
  useEffect(()=> {
    axios.get(`/getBlog/${slug}`,{
      headers : {
        'type' : 'application/json'
      }
    })
    .then(res => setPost(res.data))
    .catch(err=>console.log(err));
  },[slug])
  return (
    <Container className='mb-5' id='blog'>
      <Row>
        <Col md="8">
        <a href='/blogs' className='lead mb-5' style={{'textDecoration':'none'}}><IoIosArrowBack />Go back</a>
        <h1 className='display-4 mt-1 mb-3'>{post.title}</h1>
        <div className='text-muted mb-3'><FaClock /> &nbsp; {post.createdAt}</div>
        <h4 className='text-danger mb-3'>{post.description}</h4>
        <div className='lead mb-3'
         dangerouslySetInnerHTML={{
        __html: post.sanitizedHtml
          }}> 
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;