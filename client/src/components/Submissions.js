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
        <Col md="6">
        <h1 className='display-4 text-info' style={{'fontSize':'2rem'}}> <IoMdPerson /> Submissions : </h1>
        { submissions.length ? 
        (
        submissions.map(submission => {
          return (
          <div key={submission.id} className="card text-light bg-dark mb-2" style={{'width':'25rem','height':'auto'}} >
          <img className="card-img-top" src={`data:image/jpeg;base64,${submission.image}`} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{submission.name}</h5>
            <p className="card-text text-muted">{submission.createdAt}</p>
            <p className="card-text">{submission.email}</p>
            <p className="card-text">{submission.message}</p>
          </div>
        </div>
          )
        })
        ) : (
          <div class="clearfix p-5 m-5">
            <div class="spinner-border float-left" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          )
      }
        </Col>
      </Row>
    </Container>
  );
}

export default Submissions;