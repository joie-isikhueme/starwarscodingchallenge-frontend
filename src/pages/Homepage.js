import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
    const [characters, setCharacters] = useState({results:[]})
    const URL = "https://swapi.dev/api/people";
    const getCharacters = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setCharacters(data))
    }
    useEffect(() => {
        getCharacters();
    }, [])
    return (
        <Row>
            {characters.results.map((el,key) =>
                <Col md={4} className="mb-5" key={key}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text as="span">
                                <p>Height: <span className="font-weight-light text-danger">{el.height}cm</span></p>
                                <p>Weight: <span className="font-weight-light text-danger">{el.mass}kg</span></p>
                            </Card.Text>
                            <Button variant="outline-dark" href={`/character/${key+1}`}>View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
            
        </Row>
    )
}

export default Homepage
