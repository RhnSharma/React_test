import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaPenNib, FaClock } from 'react-icons/fa';
import axios from 'axios';
import './../App.css';

const Blogs = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(()=> {
    axios.get('/getBlogs',{
      headers : {
        'type' : 'application/json'
      }
    })
    .then(res => setPosts(res.data))
    .catch(err=>console.log(err));
  },[])
  return (
    <Container className='mb-5' id='blog'>
      <Row>
        <Col md="8">
        <h1 className='display-4 text-primary' style={{'fontSize':'2rem'}}> <FaPenNib /> All Posts : </h1>
        {
        posts.map(post => {
          return (
            <div key={post._id} className='card bg-dark text-white mt-4'>
            <div className='card-body'>
            <h1 className='card-title'>{post.title}</h1>
            <p className='card-subtitle mb-2 text-muted'><FaClock color='white'/>&nbsp; {post.createdAt}</p>
            <p className='card-subtitle mb-2 text-danger'>{post.description}</p>
            <a href={`/blog/${post.slug}`} className='btn btn-secondary'>Read more</a>
            </div>
            </div>
          ) 
        })
        }
        </Col>
      </Row>
    </Container>
  );
}

export default Blogs;