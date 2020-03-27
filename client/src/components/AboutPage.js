import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import profile from '../images/myimage.jpg';
import { IoMdPerson } from 'react-icons/io';
import './../App.css';

const AboutPage = (props) => {
  return (
    <Container className='mb-5' id='about'>
      <Row>
        <Col md="8">
        <h1 className='display-4 text-info' style={{'fontSize':'2rem'}}> <IoMdPerson /> About Me</h1>
        <p className='lead'>An Engineer who design and develop full stack websites.</p>
        </Col>
        <Col md="4">
          <img src={profile} className='profile-image img-md img-fluid rounded-circle' alt='profile'></img>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;