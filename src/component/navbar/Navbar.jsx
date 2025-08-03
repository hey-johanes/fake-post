import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { logout, user } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <Navbar className="d-block" sticky="top" bg="dark" variant="dark">
        <Container className="d-flex">
          <Navbar.Brand className="text-light">Fake Post</Navbar.Brand>
          <Nav className="text-light">
            <Nav.Link href="/dashboard" className="text-light">
              Dashboard
            </Nav.Link>
            <Nav.Link href="/social" className="text-light">
              Social
            </Nav.Link>
            <Nav.Link href="/pricing" className="text-light">
              Pricing
            </Nav.Link>
          </Nav>
          <div className="ms-auto d-flex">
            <p className="text-light m-2">{`Hi, ${user.username}!`}</p>
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
