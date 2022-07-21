import React, { useEffect, useState,useReducer } from 'react'
import axios from 'axios';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Team.css';







const Team = () => {


    const [deves,setDeves] = useState([]);


    //get data from json-server
    useEffect(() =>{
        axios.get('http://localhost:5050/deves').then(res =>{
            setDeves(res.data)
        }).catch(error =>{})
    },[deves])




  return (
      <section className="team">
         <Container>
             <Row>
                 {
                     deves.map(data =>
                        data.status &&  <Col md={ 4 } className='my-4'>
                        <Card className='shadow'>
                        <Card.Img style={{height : '300px', objectFit : 'cover'}} src={data.photo}></Card.Img>
                     <Card.Body>
                         <h3>{data.name}</h3>
                         <p>{data.cell}</p>
                         <Link className='btn btn-primary' to={`/profile/${data.username}`}>View Profile</Link>
                     </Card.Body>
                     </Card>
                        </Col>
                         )
                 }
             </Row>
         </Container>
        
      </section>
  )
}

export default Team