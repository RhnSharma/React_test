import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { FaPenNib, FaClock } from "react-icons/fa";
import axios from "axios";
import TimeAgo from "react-timeago";
import blogs from "../images/blogs.svg";
import "./../App.css";

const Blogs = ({ theme }) => {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("/getBlogs", {
        headers: {
          type: "application/json",
        },
      })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, [counter]);

  useEffect(() => {
    axios
      .get("/checktoken")
      .then((res) => {
        if (res.status === 200) {
          setShow(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (slug, id) => {
    document.getElementById(id).disabled = true;
    const requestOptions = {
      method: "DELETE",
    };
    axios
      .delete(`/deleteblogpost/${slug}`, requestOptions)
      .then((res) => {
        posts.filter((post) => post.id === id);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          document.getElementById(id).disabled = false;
          document.getElementById(id).innerHTML = "Delete Post";
        }, 500);
        document.getElementById(id).innerHTML = "Unauthorized";
      });
    setCounter(counter + 1);
  };
  return (
    <Container className="mb-5" id="blog">
      <Row>
        <Col md="4" className="text-center mt-5 mb-4">
          <img
            src={blogs}
            className="blogs-image img-fluid mt-5"
            alt="profile"
          ></img>
        </Col>
        <Col md="8">
          <h1 className="display-4 name title" style={{ fontSize: "2rem" }}>
            <FaPenNib />
            All Posts :
          </h1>
          {posts.length ? (
            posts.map((post) => {
              return theme.mode === "dark" ? (
                <div key={post._id} className="card bg-dark text-white mt-4">
                  <div className="card-body">
                    <h1 className="card-title">{post.title}</h1>
                    <p className="card-subtitle mb-2 text-muted">
                      <FaClock color="white" />
                      &nbsp; <TimeAgo date={post.createdAt} />
                    </p>
                    <p className="card-subtitle mb-2 text-primary">
                      {post.description}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="btn btn-secondary p-1"
                    >
                      Read more
                    </Link>
                    {show ? (
                      <>
                        <Link
                          to={`/editblog/${post.slug}`}
                          className="btn btn-primary mx-2 p-1"
                        >
                          Edit Post
                        </Link>
                        <button
                          id={post._id}
                          onClick={() => deletePost(post.slug, post._id)}
                          className="btn btn-danger my-1 p-1"
                        >
                          Delete Post
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div key={post._id} className="card mt-4">
                  <div className="card-body">
                    <h1 className="card-title">{post.title}</h1>
                    <p className="card-subtitle mb-2 text-muted">
                      <FaClock color="black" />
                      &nbsp; <TimeAgo date={post.createdAt} />
                    </p>
                    <p className="card-subtitle mb-2 text-primary">
                      {post.description}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="btn btn-secondary p-1"
                    >
                      Read more
                    </Link>
                    {show ? (
                      <>
                        <Link
                          to={`/editblog/${post.slug}`}
                          className="btn btn-primary mx-2 p-1"
                        >
                          Edit Post
                        </Link>
                        <button
                          id={post._id}
                          onClick={() => deletePost(post.slug, post._id)}
                          className="btn btn-danger my-1 p-1"
                        >
                          Delete Post
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="clearfix p-5 m-5">
              <div className="spinner-border float-left" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
