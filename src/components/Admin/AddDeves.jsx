
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CloseButton, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Admin.css';


const AddDeves = () => {


    // stat for alert
    const [alert, setAlert] = useState({
        msg  : '',
        type : '',
        status : false
    })


    const [input,setInput] = useState({
        name  :  '',
        username : '',
        email :  '',
        cell  :  '',
        photo :  '',
        skill :  '',
        fb    :  '',
        stasus : false
    });

    const {name,email,username,cell,photo,skill,fb} = input;

    // get data from form

    const handaleForm = (e) => {
        e.preventDefault();

        // input fields validation

        if( name === '' || email === '' || cell === '' || photo === '' || skill === ''  ){
            setAlert({
                msg  :  'All fields are required !',
                type :  'danger',
                status : true
            });
        }else{
             // post data by axios
            axios.post('http://localhost:5050/deves',
                input
            ).then( res => {
                setInput({
                    name  :  '',
                    username : '',
                    email :  '',
                    cell  :  '',
                    photo :  '',
                    skill :  '',
                    fb    :  ''
                });
                setAlert({
                    msg  :  'Data Stable',
                    type :  'success',
                    status : true
                })
          } );

        }


    };
    
    // handale Close

    const handaleClose = () =>{
          setAlert({
            msg  : '',
            type : '',
            status : false
          })
    }
  return (
      <>
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col md={ 6 }>
                    <Card className='shadow'>
                        <Card.Header>
                            <h3>Add New Deves</h3>
                        </Card.Header>
                        <Card.Body>
                                { alert.status &&  <p className={`d-flex justify-content-between alert alert-${alert.type}`}> {alert.msg} <CloseButton onClick={ handaleClose }></CloseButton></p> }
                        
                          <Form onSubmit={ handaleForm }>
                              <div className="my-3">
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control value={input.name} onChange={ (e) => setInput( {...input, name : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Username</Form.Label>
                                  <Form.Control value={input.username} onChange={ (e) => setInput( {...input, username : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control value={input.email} onChange={ (e) => setInput( {...input, email : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Cell</Form.Label>
                                  <Form.Control value={input.cell} onChange={ e => setInput( {...input, cell : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Skill</Form.Label>
                                  <Form.Control value={input.skill} onChange={ (e) => setInput( {...input, skill : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Photo</Form.Label>
                                  <Form.Control value={input.photo} onChange={ (e) => setInput( {...input, photo : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Facebook</Form.Label>
                                  <Form.Control value={input.fb} onChange={ (e) => setInput( {...input, fb : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Button type='submit' className='btn btn-primaty w-100'>Add New Deves</Button>
                              </div>
                          </Form>
                        </Card.Body>
                        <Card.Footer>
                            <Link className='btn btn-info' to="/admin">Go Back</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
      </>
  )
}

export default AddDeves