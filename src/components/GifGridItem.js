import React from 'react'

import Card from 'react-bootstrap/Card';

export const GifGridItem = ({title, url}) => {
    return (
        // <div className="card animate__animated animate__jello">
        //     <img src={url} alt={title}/>
        //     <p> {title} </p>
        // </div>
        <Card className="cardd">
            <Card.Img className="pic" variant="top" src={url} alt={title} />
            <Card.Body className="hidden-mobile">
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
