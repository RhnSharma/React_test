import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import chatapp from '../images/chatapp.jpg';
import calculator from '../images/jscalc.png';
import { IoMdFolder } from 'react-icons/io';

const ProjectsPage = (props) => {
  return (
    <Container className='mb-5' id='projects'>
      <Row>
        <Col xs="12">
        <h1 className='display-4 mb-3 text-info' style={{'fontSize':'2rem'}}> <IoMdFolder /> Projects</h1>
        <h3 className='lead font-weight-bold text-danger'> Chat App - </h3>
      <p className='lead'>It is a Chat Web application made using Nodejs and Socketio.</p>
      <img className='img-fluid' src={chatapp} alt="Chat app"></img>
      <div>
        <p className='lead text-secondary'>nodejs &nbsp; expressjs &nbsp; socketio</p>
      </div>
        <h3 className='lead font-weight-bold text-danger'> Javascript Calculator - </h3>
      <p className='lead'>It is a Calculator application made using Javascript.</p>
      <img className='img-fluid' src={calculator} alt="Chat app"></img>
      <div>
        <p className='lead text-secondary'>html &nbsp; css &nbsp; javascript</p>
      </div>
        </Col>
        <Col xs="12"></Col>
      </Row>
    </Container>
  );
}

export default ProjectsPage;