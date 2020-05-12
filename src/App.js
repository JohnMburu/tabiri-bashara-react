import React from 'react';
import {Nav, Navbar, Form, Container, Row, Col} from 'react-bootstrap' ;
import Main from './components/main';
import './App.css';


function App() {
  return (
    <div>
      <Navbar className="justify-content-end" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Tabiri Biashara</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/prediction">Prediction outcome</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <Form>
      <Main/>
      </Form>

      <div className ="footer">
      <Navbar bg="dark" variant="dark" >
            <Nav className="mr-auto">


            <Container>
              <Row>
                <Col sm={3}>
                <Nav.Link href="/legal">Terms and Conditions</Nav.Link>
                </Col>
                <Col sm={3}>
                <Nav.Link href="/privacy">Data Protection and Privacy</Nav.Link>
                </Col>
                <Col sm={3}>
                <Nav.Link href="/about">About</Nav.Link>
                </Col>
                <Col sm={3}>
                <Nav.Link >© copyright 2020</Nav.Link>
                </Col>
              </Row>
            </Container>
            </Nav>
      </Navbar>
      </div>
    </div>
  );
}

export default App;
