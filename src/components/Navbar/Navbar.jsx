import React from "react";
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-background">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Zoren Villareal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#About">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;