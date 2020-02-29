import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaWordpress } from "react-icons/fa";
import './../App.css';

const Footer = () => (
  <footer className="footer text-center text-dark bg-light">
    <p>&copy; Copyright 2020</p>
    <div className='socialicons'>
      <a href='https://www.linkedin.com/in/rohan-sharma-683897135/' target='blank'><FaLinkedinIn color='black'/></a>  
      <a href='https://github.com/RhnSharma' target='blank'><FaGithub color='black'/></a>  
      <a href='https://www.instagram.com/rhnsharma/' target='blank'><FaInstagram color='black'/></a>  
      <a href='https://twitter.com/rhnsharma5113' target='blank'><FaTwitter color='black'/></a>  
      <a href='https://rhnsharma.wordpress.com/' target='blank'><FaWordpress color='black'/></a>  
    </div>
  </footer>
);

export default Footer;