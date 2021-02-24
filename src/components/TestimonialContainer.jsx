import React from 'react';
import Testimonial from '../components/Testimonial';

const TestimonialContainer = (props) => {

    return (
        <>
        {props.testimonials.map(testimonial => <Testimonial testimonial={testimonial}/>)}
        </>
    )
}

export default TestimonialContainer;