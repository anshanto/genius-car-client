import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, prev, next, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className='absolute flex justify-between transform -translate-y-1/2 left-20 top-1/4'>
                <h2 className='text-7xl font-bold text-white text-start service-title'>
                    Affordable <br />Price For Car <br />Servicing
                </h2>
            </div>
            <div className='absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2'>
                <p className='text-white text-start passage'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
            <div className='absolute flex justify-between transform -translate-y-1/2 left-20 top-2/3'>
                <button className="dis-btn mr-3">Discover More</button>
                <button className="pro-btn">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-outline text-white mr-5 hover:bg-orange-600 hover:border-0">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-outline text-white hover:bg-orange-600 hover:border-0">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;