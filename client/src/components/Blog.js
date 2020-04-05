import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    .then(res => {
      setPost(res.data);
      document.querySelectorAll('img').forEach(el => el.classList.add('img-fluid'));
    })
    .catch(err=>console.log(err));
  },[slug])
  return (
    <Container className='mb-5' id='iblog'>
      <Row>
        <Col md="8">
        <Link to='/blogs' className='lead mb-5' style={{'textDecoration':'none'}}><IoIosArrowBack />Go back</Link>
        {post.length === 0 ?
         (
          <div className="clearfix p-5 m-5">
          <div className="spinner-border float-left" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        ) : 
        (
          <div>
          <h1 className='display-4 mt-1 mb-3 title'>{post.title}</h1>
          <div className='text-muted mb-3 time'><FaClock /> &nbsp; {post.createdAt}</div>
          <h4 className='text-danger mb-3 description'>{post.description}</h4>
          <div className='lead mb-3 content'
           dangerouslySetInnerHTML={{
          __html: post.sanitizedHtml
            }}> 
          </div>
          </div>
        )
        }
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;