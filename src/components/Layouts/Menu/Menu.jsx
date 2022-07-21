import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
      <section className="menu-section shadow-sm">
          <Container>
              <Row className='d-flex justify-content-between'>
                  <Col md={ 3 }>
                     <div className="logo">
                     <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" alt="" /></Link>
                     </div>
                  </Col>
                  <Col md={ 9 }>
                      <div className="menu text-right">
                          <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/admin">Admin</Link></li>
                              <li><a href="#">Profile</a></li>
                              <li><Link to="/adddeves" className='btn btn-success btn-sm'>Sign Up</Link></li>  &nbsp;
                              <li><a href="#" className='btn btn-dark btn-sm'>Log In</a></li>
                          </ul>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Menu