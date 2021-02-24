import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import TestimonialContainer from '../components/TestimonialContainer';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const result = await Axios.get("http://localhost:9000/testimonials");
            const data = result.data;
            setTestimonials(data);
            console.log(data);
        }
        fetchData();
    }, [])

    return (
        <>
            <h1>Testimonials</h1>
            <TestimonialContainer testimonials={testimonials} />
        </>
    )
}

export default Testimonials; 