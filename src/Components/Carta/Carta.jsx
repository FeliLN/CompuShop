import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './Carta.css'

const Carta = (props) => { //Traigo los atributos del objeto creado en Shop 
   
   const variable = "tuvieja";
   
    return (
        <div className="">
            <Card className="card">
                {/* Aca le pasé el atributo de img que traigo desde Shop */}
                <Card.Img className="CardImg" variant="top" src={props.img} /> 
                {/*  */}
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.asdasd
                    {variable} 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Carta
