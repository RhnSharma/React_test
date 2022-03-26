import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWordpress,
} from "react-icons/fa";
import "./../App.css";

const Footer = () => (
  <footer className="footer text-center text-dark bg-light navbar-fixed-bottom">
    <p>&copy; Copyright 2020</p>
    <div className="socialicons">
      <a
        href="https://www.linkedin.com/in/rohan-sharma-683897135/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn color="black" />
      </a>
      <a
        href="https://github.com/RhnSharma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color="black" />
      </a>
      <a
        href="https://www.instagram.com/rhnsharma/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram color="black" />
      </a>
      <a
        href="https://twitter.com/rohanxsharma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter color="black" />
      </a>
      <a
        href="https://rhnsharma.wordpress.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWordpress color="black" />
      </a>
    </div>
  </footer>
);

export default Footer;
