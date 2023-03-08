import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen w-9/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={person} alt="" className='w-11/12 h-full rounded-lg shadow-2xl' />
                        <img src={parts} alt="" className='absolute right-5 w-3/5 top-2/3 border-white border-8 rounded-lg shadow-2xl shadow-white' />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-start font-bold text-xl text-orange-600'>About Us</p>
                        <h1 className="text-5xl font-bold text-black text-start">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6 text-start">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className='text-start'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary bg-orange-500 border-none text-start">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;