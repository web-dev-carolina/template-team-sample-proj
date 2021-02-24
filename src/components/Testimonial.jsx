import React from 'react';
import Card from 'react-bootstrap/Card';

const Testimonial = (props) => {
    return(
        <>
        <Card style={{width: '70vw'}}>
            <Card.Body>
                <Card.Title>{props.testimonial.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.testimonial._id}</Card.Subtitle>
                <Card.Text>
                    {props.testimonial.text}
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Testimonial;