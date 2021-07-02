import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <Navbar bg="light" expand="sm" className="d-flex justify-content-between w-100">
            <Navbar.Brand href="#home">Star Wars Inc.</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form className="ml-auto">
                    <Row>
                        <Col>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Col>
                        <Col>
                        <Button variant="outline-success">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
