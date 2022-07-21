
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Profile.css'
const Profile = () => {

    //get params
    const {username} = useParams()

    const [profile,setProfile] = useState({})
    //get single profile
    useEffect(() =>{

        axios.get(`http://localhost:5050/deves?username=${username}`).then(res =>{
            setProfile(res.data[0])
            //console.log(res.data[0].name);
        }).catch(error =>{})

    },[])


  return (
      <>
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col md={ 6 }>
                    <Card>
                        <Card.Body>
                            <div className="profile">
                                 <img src={profile.photo} alt="" />
                                <h3>{profile.name}</h3>
                                <p>{profile.cell}</p>
                                <span className="skill">{profile.skill}</span>
                                <div className="social-icon">
                                    <ul className='d-flex justify-content-center'>
                                        { profile.fb && <li><a href="#"><i class='bx bxl-facebook'></i></a></li>}
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Link className='btn btn-primary' to="/">Go Back</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
      </>
  )
}

export default Profile