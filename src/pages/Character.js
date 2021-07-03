import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import star from '../star.svg'
import starFill from '../star-fill.svg'

const Character = () => {
    const URL = "https://swapi.dev/api/people/";
    const [character, setCharacter] = useState({});
    const [clicked, setClicked] = useState(false)
    let id = window.location.pathname.split('/')[2];

    useEffect(() => {
        fetch(URL + `${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, [])
    console.log(character);
    const onToggle = ()=> {
        setClicked(!clicked)
    }
    return (
        <Card className="m-auto d-flex w-75 p-5">
             {character.name ? (
            <>
             <Card.Title>{character.name} 
             <Button variant="link" onClick={onToggle}>
             {clicked ? (<img src={starFill} alt="Bootstrap" width="32" height="32"/>):(<img src={star} alt="Bootstrap" width="32" height="32"/>)}
             </Button>
             
             </Card.Title>
                <Card.Text as="span">
                     <p>Height: <span className="font-weight-light text-danger">{character.height}cm</span></p>
                    <p>Weight: <span className="font-weight-light text-danger">{character.mass}kg</span></p>
                    <p>Hair Color: <span className="font-weight-light text-danger">{character.hair_color}</span></p>
                    <p>Skin Color: <span className="font-weight-light text-danger">{character.skin_color}</span></p>
                    <p>Films: {character.films && character.films.map((el, key)=>(
                        <>
                            <span className="font-weight-light text-danger">
                                <a href={el} target="_blank" rel="noreferrer">Film {key+1}</a>
                            </span>
                            <br/>
                        </>
                    ))}
                    </p>
                </Card.Text>
            </>
                ):<p>Loading...</p>}
        </Card>
    )
}

export default Character
