import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { FaClock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import hljs from "highlight.js";
import TimeAgo from "react-timeago";
import helper from "../utils/helper";
import "./../App.css";

const Blog = (props) => {
  const { match } = props;
  let { slug } = match.params;
  const [post, setPost] = useState([]);
  let bar = useRef();
  let blogSection = useRef();
  useEffect(() => {
    axios
      .get(`/getBlog/${slug}`, {
        headers: {
          type: "application/json",
        },
      })
      .then((res) => {
        setPost(res.data);
        document
          .querySelectorAll("img")
          .forEach((el) => el.classList.add("img-fluid"));
      })
      .catch((err) => console.log(err));
  }, [slug]);

  useEffect(() => {
    helper.highlightCode();
    document.querySelectorAll("pre.ql-syntax").forEach((block) => {
      hljs.highlightElement(block);
    });
  });

  const animateProgressBar = () => {
    let progressBar = bar.current;
    let section = blogSection.current;

    if (progressBar && section) {
      let scrollDistance = -section.getBoundingClientRect().top;
      let progressWidth =
        (scrollDistance /
          (section.getBoundingClientRect().height -
            document.documentElement.clientHeight)) *
        100;
      let value = Math.floor(progressWidth);
      progressBar.style.width = value + "%";

      if (value < 0) {
        progressBar.style.width = "0%";
      }
    }
  };

  window.addEventListener("scroll", animateProgressBar);

  return (
    <Container className="mb-5" id="iblog">
      <Row>
        <Col md="8">
          <Link
            to="/blogs"
            className="lead mb-5 name"
            style={{ textDecoration: "none" }}
          >
            <IoIosArrowBack />
            Go back
          </Link>
          {post.length === 0 ? (
            <div className="clearfix p-5 m-5">
              <div className="spinner-border float-left" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div ref={blogSection}>
              <h1 className="display-4 mt-1 mb-3 title">{post.title}</h1>
              <div className="text-muted mb-3 time">
                <FaClock /> &nbsp; <TimeAgo date={post.createdAt} />
              </div>
              <h4 className="name mb-3 description">{post.description}</h4>
              <div
                className="lead mb-3 content"
                dangerouslySetInnerHTML={{
                  __html: post.sanitizedHtml,
                }}
              ></div>
              <div ref={bar} id="progress-bar"></div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
