import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Icon from '../../assets/images/icon.png';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <Container>
        <Navbar expand="lg">
          <Row>
            <Col lg="6">
              <Navbar.Brand href="/home">
                <div className="logo__icon">
                  <img src={Icon} alt="" />
                </div>
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
            </Col>
            <Col lg="4">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Navbar>
        <Offcanvas show={showMenu} onHide={toggleMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
               
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </div>
  );
}

export default Header;
