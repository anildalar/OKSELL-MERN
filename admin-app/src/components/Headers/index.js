import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

/**
* @author
* @function Headers
**/

const Headers = (props) => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">OKSELL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">SignIn</Nav.Link>
                    <Nav.Link href="#link">SignUp</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Headers