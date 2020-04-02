import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FaPenNib, FaClock } from 'react-icons/fa';
import axios from 'axios';
import './../App.css';

const Blogs = (props) => {
  const [posts, setPosts] = useState([]);
  const[counter, setCounter] = useState(0);
  useEffect(()=> {
    axios.get('/getBlogs',{
      headers : {
        'type' : 'application/json'
      }
    })
    .then(res => setPosts(res.data))
    .catch(err=>console.log(err));
  },[counter])
  const deletePost = (slug,id) => {
    document.getElementById(id).disabled = true;
    document.getElementById(id).innerHTML = 'Deleting...';
    const requestOptions = {
      method: 'DELETE'
    }
    axios.delete(`/deleteblogpost/${slug}`, requestOptions)
    .then(res => console.log(res))
    .catch(err => 
      {
        console.log(err)
        setTimeout(()=>{
          document.getElementById(id).disabled = false;
          document.getElementById(id).innerHTML = 'Delete Post';
        },500);
        document.getElementById(id).innerHTML = 'Unauthorized';
      }); 
    setCounter(counter + 1);
  }
  return (
    <Container className='mb-5' id='blog'>
      <Row>
        <Col md="8">
        <h1 className='display-4 text-primary' style={{'fontSize':'2rem'}}> <FaPenNib /> All Posts : </h1>
        { posts.length ? 
        (
        posts.map(post => {
          return (
            <div key={post._id} className='card bg-dark text-white mt-4'>
            <div className='card-body'>
            <h1 className='card-title'>{post.title}</h1>
            <p className='card-subtitle mb-2 text-muted'><FaClock color='white'/>&nbsp; {post.createdAt}</p>
            <p className='card-subtitle mb-2 text-danger'>{post.description}</p>
            <Link to={`/blog/${post.slug}`} className='btn btn-secondary p-1'>Read more</Link>
            <Link to={`/editblog/${post.slug}`} className='btn btn-primary mx-2 p-1'>Edit Post</Link>
            <button id={post._id} onClick={() => deletePost(post.slug,post._id)} className='btn btn-danger p-1'>Delete Post</button>
            </div>
            </div>
          ) 
        })
        ) : (
          <div className="clearfix p-5 m-5">
            <div className="spinner-border float-left" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          )
        }
        </Col>
      </Row>
    </Container>
  );
}

export default Blogs;