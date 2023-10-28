import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigasiBar = () => {
  return (
    <div>
      <Navbar variant="">
        <Container className="text-black">
          <Navbar.Brand>BudiStore</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Tambah">Add Data</Nav.Link>
            <Nav.Link as={Link} to="/Hapus">Delete</Nav.Link>
            <Nav.Link as={Link} to="/Update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigasiBar;
