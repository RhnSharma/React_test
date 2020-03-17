import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IoMdPerson } from 'react-icons/io';
import './../App.css';
import axios from 'axios';

const Submissions = (props) => {
  const [submissions, setSubmissions] = useState([]);
    useEffect(()=>{
      axios.get('/getAll',{
        headers : {
          'type' : 'application/json'
        }
      })
      .then(res => setSubmissions(res.data))
      .catch(err=>console.log(err));
    },[]);
  return (
    <Container className='mb-5' id="users">
      <Row>
        <Col md="8">
        <h1 className='display-4 text-info' style={{'fontSize':'2rem'}}> <IoMdPerson /> Submissions : </h1>
        <ol>
        {submissions.map(submission => {
          return (
          <li key={submission.id}>
            Name :  {submission.name}
            <br />
            Email :  {submission.email}
            <br />
            Message : {submission.message}
            <br />
            Created at : {submission.createdAt}
            <br />
            <p>Image : </p><img className='img-fluid' src={`data:image/jpeg;base64,${submission.image}`} alt='Project' height='300' width='400'/>
          </li>
          )
        })}
        </ol>
        </Col>
      </Row>
    </Container>
  );
}

export default Submissions;