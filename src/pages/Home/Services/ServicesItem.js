import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";

const ServicesItem = ({ service }) => {
    const { title, price, img, _id } = service;
    return (
        <div className="card card-compact w-full bg-base-100 border mx-auto">
            <figure><img className='w-11/12 mt-3 rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-black">{title}</h2>
                <div className="flex justify-between">
                    <p className='text-start text-lg text-orange-400 font-bold'>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary bg-orange-500 border-none"><HiArrowRight></HiArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;