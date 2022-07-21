
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';
//import Edit from './Edit/Edit';

const Admin = () => {

    // modal section
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  } 
  // get id from modal
  const [id,setId] = useState(0)
    const [table,setTable] = useState([])

    // get data from json-server
     useEffect( () =>{
         axios.get('http://localhost:5050/deves').then( res =>{
            setTable( res.data )
         } ).catch( error =>{} )
     }, [table] )


     // Unlock data
     const handaleUnlock = (id) =>{
        axios.patch(`http://localhost:5050/deves/${id}`,{
            status : true

             }).then( res =>{

         } ).catch( error =>{} )
     }


     // Lock data
     const handaleLock = (id) =>{
        axios.patch(`http://localhost:5050/deves/${id}`,{
            status : false

             }).then( res =>{

         } ).catch( error =>{} )
     }

     // Delete data 

     const handaleDelete = () =>{
        axios.delete(`http://localhost:5050/deves/${id}`).then( res =>{ } )
        setShow(false);
     }

  return (
      <>
        <Container className='mt-5'>
            <Row className='justify-content-center'>
                <Col md={ 10 }>
                    <Card className='shadow'>
                        <Card.Header className='d-flex justify-content-between'>
                        <h4>All devs</h4>
                        </Card.Header>
                        <Card.Body>
                           <Table striped bordered hover variant="dark">
                               <thead>
                                   <tr>
                                       <th>#</th>
                                       <th>Name</th>
                                       <th>Skill</th>
                                       <th>Cell</th>
                                       <th>Photo</th>
                                       <th>View</th>
                                       <th>Edit</th>
                                       <th>Delete</th>
                                       <th>Lock</th>
                                       <th>unlock</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   {
                                       table.map( ( data,index ) =>
                                        <tr>
                                       <td>{index + 1}</td>
                                       <td>{data.name}</td>
                                       <td>{data.skill}</td>
                                       <td>{data.cell}</td>
                                       <td><img style={{width : '50px', height : '50px', objectFit : 'cover'}} src={data.photo} alt="" /></td>
                                       <td><a className='btn btn-info btn-sm'><i class='bx bx-show' ></i></a></td>
                                       <td><Link to={`/edit/${data.id}`} className='btn btn-warning btn-sm'><i class='bx bx-edit-alt' ></i></Link></td>
                                       <td><Button onClick={ () => handleShow(data.id)}  className='btn btn-danger btn-sm'><i class='bx bxs-trash-alt' ></i></Button></td>
                                       <td><Button onClick={ () => handaleLock( data.id ) } className='btn btn-secondary btn-sm'><i class='bx bx-lock-alt'></i></Button></td>
                                       <td><Button title='Unlock' onClick={ () => handaleUnlock( data.id ) } className='btn btn-warning btn-sm'><i class='bx bx-lock-open-alt' ></i></Button></td>
                                   </tr>
                                        )
                                   }
                                   
                               </tbody>
                           </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delet Data </Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ handaleDelete }>
              Delete
          </Button>
        </Modal.Footer>
      </Modal>



      </>
  )
}

export default Admin