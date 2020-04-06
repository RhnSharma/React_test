import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import profile from '../images/myimage.jpg';
import { IoMdPerson } from 'react-icons/io';
import './../App.css';

const AboutPage = (props) => {
  return (
    <Container className='mb-5 pt-2' id='about'>
      <Row>
        <Col md="6">
        <h1 className='display-4 text-info title' style={{'fontSize':'2rem'}}> <IoMdPerson /> About Me</h1>
        <p className='lead content'>An Engineer who design and develop full stack websites.</p>
        </Col>
        <Col md="6" className='text-center'>
          <img src={profile} className='profile-image img-fluid rounded-circle' alt='profile'></img>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;