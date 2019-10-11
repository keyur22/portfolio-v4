import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="py-3 px-md-5" variant="dark">
            <Navbar.Brand className="font-weight-bold text-uppercase text-white">
                Keyur Chaudhari
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mt-3 mt-md-0">
                    <LinkContainer exact to="/" className="text-white mx-4 text-uppercase font-weight-bold text-center">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about" className="text-white mx-4 text-uppercase font-weight-bold text-center">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/skills" className="text-white mx-4 text-uppercase font-weight-bold text-center">
                        <Nav.Link>Skills</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects" className="text-white mx-4 text-uppercase font-weight-bold text-center">
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;
