import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar className="d-block" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="text-light">Fake Post</Navbar.Brand>
          <Nav className="me-auto text-light">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-light">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
