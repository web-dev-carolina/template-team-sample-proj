import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Testimonials from '../pages/Testimonials'

const NavbarContainer = () => {

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className="navbar">
                <Navbar.Brand className="mr-auto logo-nav">Sample React Project</Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/"> Home </Nav.Link>
                    <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/testimonials" component={Testimonials} />
            </Switch>
        </>
        
    )
}

export default NavbarContainer; 