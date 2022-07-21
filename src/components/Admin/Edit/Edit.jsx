
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CloseButton, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import './Edit.css';


const Edit = () => {

    const param = useParams()
    // stat for alert
    const [alert, setAlert] = useState({
        msg  : '',
        type : '',
        status : false
    })


    const [edit,setEdit] = useState({
        name  :  '',
        username : '',
        email :  '',
        cell  :  '',
        photo :  '',
        skill :  '',
        fb    :  ''
    });

    const {name,email,username,cell,photo,skill,fb} = edit;

    // get data from form
    
    useEffect( () =>{
        axios.get(`http://localhost:5050/deves/${param.id}`).then( res =>{
            setEdit({
                name  :   res.data.name,
                username : res.data.username,
                email :   res.data.email,
                cell  :   res.data.cell,
                photo :   res.data.photo,
                skill :   res.data.skill,
                fb    :   res.data.fb
            })
          
        } ).catch( error =>{} );
    },[] )

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
             // patch data by axios
            axios.patch(`http://localhost:5050/deves/${param.id}`,{
                name   : edit.name,  
                username : edit.username,
                email  :  edit.email,
                cell   :  edit.cell, 
                photo  :  edit.photo,
                skill  :  edit.skill,
                fb     :  edit.fb
            }).then( res => {
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
        <Container className="mt-5">
            <Row className='justify-content-center'>
                <Col md={ 5 }>
                    <Card className='text-center'>
                        <Card.Img src={ photo } />
                        <Card.Body>
                            <h3>{ name }</h3>
                            <p>@{ username }</p>
                            <p>{ email }</p>
                        </Card.Body>
                    </Card>
                </Col>
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
                                  <Form.Control value={edit.name} onChange={ (e) => setEdit( {...edit, name : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Username</Form.Label>
                                  <Form.Control value={edit.username} onChange={ (e) => setEdit( {...edit, username : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control value={edit.email} onChange={ (e) => setEdit( {...edit, email : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Cell</Form.Label>
                                  <Form.Control value={edit.cell} onChange={ e => setEdit( {...edit, cell : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Skill</Form.Label>
                                  <Form.Control value={edit.skill} onChange={ (e) => setEdit( {...edit, skill : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Photo</Form.Label>
                                  <Form.Control value={edit.photo} onChange={ (e) => setEdit( {...edit, photo : e.target.value} ) } type='text'></Form.Control>
                              </div>
                              <div className="my-3">
                                  <Form.Label>Facebook</Form.Label>
                                  <Form.Control value={edit.fb} onChange={ (e) => setEdit( {...edit, fb : e.target.value} ) } type='text'></Form.Control>
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

export default Edit