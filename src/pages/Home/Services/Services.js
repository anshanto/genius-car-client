import React, { useEffect, useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='m-10'>
            <div>
                <h3 className='text-2xl text-center font-bold text-orange-500'>Services</h3>
                <h2 className='text-5xl text-center font-bold text-black'>Our Service Area</h2>
                <p className='m-4 text-center'>the majority have suffered alteration in some form, by injected humour, or randomised
                    <br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto'>
                {
                    services.map(service =>
                        <ServicesItem
                            key={service._id}
                            service={service}
                        ></ServicesItem>)
                }
            </div>
        </div>
    );
};

export default Services;