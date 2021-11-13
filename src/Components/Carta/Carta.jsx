import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Carta = () => {
   
   const variable = "tuvieja";
   
    return (
        <div>
            <Card className="text-center">
                <Card.Img className="Card.Img" variant="top" src="holder.js/100px180" />
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    {variable}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Carta
