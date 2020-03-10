import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import chatapp from '../images/chatapp.jpg';
import calculator from '../images/jscalc.png';
import { IoMdFolder } from 'react-icons/io';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import './../App.css';

const ProjectsPage = (props) => {
  return (
    <Container className='mb-5' id='projects'>
      <Row>
        <Col xs="12">
        <h1 className='display-4 mb-3 text-info' style={{'fontSize':'2rem'}}> <IoMdFolder /> Projects</h1>
        <h3 className='lead font-weight-bold text-danger'> Chat App - </h3>
      <p className='lead'>It is a Chat Web application made using Nodejs and Socketio.</p>
      <img className='img-fluid projectthumbnail' src={chatapp} alt="Chat app"></img>
      <div className='subproject'>
        <div className='subprojectright'>
        <p className='lead text-secondary'>nodejs &nbsp; expressjs &nbsp; socketio</p>
        </div>
        <div className='subprojectleft'>
          <a href='https://young-temple-48299.herokuapp.com/' target='_blank' rel='noopener noreferrer'><FaExternalLinkSquareAlt className='link' color='white' size={20}/></a>
          <a href='https://github.com/RhnSharma/node-chat-app' target='_blank' rel='noopener noreferrer'><FaGithub className='link' color='white' size={20}/></a>
        </div>
      </div>
        <h3 className='lead font-weight-bold text-danger'> Javascript Calculator - </h3>
      <p className='lead'>It is a Calculator application made using Javascript.</p>
      <img className='img-fluid projectthumbnail' src={calculator} alt="Chat app"></img>
      <div className='subproject'>
        <div className='subprojectright'>
        <p className='lead text-secondary'>html &nbsp; css &nbsp; javascript</p>
        </div>
        <div className='subprojectleft'>
          <a href='https://codepen.io/rhnsharma5113/full/yovXVv' target='_blank' rel='noopener noreferrer'><FaExternalLinkSquareAlt className='link' color='white' size={20}/></a>
        </div>
      </div>
        </Col>
        <Col xs="12"></Col>
      </Row>
    </Container>
  );
}

export default ProjectsPage;