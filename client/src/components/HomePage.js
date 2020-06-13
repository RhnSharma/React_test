import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './../App.css';

const HomePage = (props) => {
  return (
      <Jumbotron  className='text-center home'>
        <h1 className="display-3 maintext" style={{'fontSize':'3.7rem'}}>Hello, I'm <span className='text-danger'>Rohan Sharma</span></h1>
        <p className="display-4 subtext" style={{'fontSize':'2.7rem'}}>A Full Stack Web Developer</p>
        <p className="display-4 subtext" style={{'fontSize':'2.7rem'}}>Based in New Delhi, India</p>
        <p className="lead">
          <a href="mailto:rhnsharma5113@gmail.com"><Button className='text-light btn btn-secondary'>Let's Connect</Button></a>
          <Link to={`${process.env.PUBLIC_URL}/Rohan's_Resume.pdf`} target="_blank" download><Button className='text-light btn btn-secondary m-3'>Download Resume</Button></Link>
        </p>
      </Jumbotron>

  );
};

export default HomePage;