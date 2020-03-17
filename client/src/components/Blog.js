import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaClock } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';
import './../App.css';

const Blog = (props) => {
    const { match } = props;
    let { id } = match.params;
  const [post, setPost] = useState([]);
  useEffect(()=> {
    axios.get(`/getBlog/${id}`,{
      headers : {
        'type' : 'application/json'
      }
    })
    .then(res => setPost(res.data))
    .catch(err=>console.log(err));
  },[])
  return (
    <Container className='mb-5' id='blog'>
      <Row>
        <Col md="8">
        {/* <div key={post._id} className='card bg-dark text-white mt-4'>
        <div className='card-body'>
        <h1 className='card-title'>{post.title}</h1>
        <p className='card-subtitle mb-2 text-muted'><FaClock color='white'/>&nbsp; {post.createdAt}</p>
        <p className='card-subtitle mb-2 text-danger'>{post.description}</p>
        <p className='card-text'>{post.post}</p>
        </div>
        </div> */}
        <a href='/blogs' className='lead mb-5' style={{'text-decoration':'none'}}><IoIosArrowBack />Go back</a>
        <h1 className='display-4 mb-4'>{post.title}</h1>
        <div className='text-muted'><FaClock /> &nbsp; {post.createdAt}</div>
        <h4 className='text-danger mt-4 mb-4'>{post.description}</h4>
        <div className='lead'>{post.post}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;