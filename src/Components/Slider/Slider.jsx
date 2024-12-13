import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../index.css';

// import required modules
import { Pagination } from 'swiper/modules';
import ReviewCard from '../ReviewCard/ReviewCard';

export default function Slider() {
  const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: '/images/people-1.jpg',
      company: 'PixelForge'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ethan Caldwell',
      imgSrc: '/images/people-2.jpg',
      company: 'NexaWave'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: '/images/people-3.jpg',
      company: 'CodeCraft'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: '/images/people-4.jpg',
      company: 'BrightWeb'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital'
    }
  ];
  const points= {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    }}
  return (
    <>
      <Swiper
        // slidesPerView={2}
        spaceBetween={30}
        breakpoints={points}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {reviews.map(({company, content, name, imgSrc},key)=>{
          return(
            <SwiperSlide>
          <ReviewCard company={company} content={content} name={name} imgSrc={imgSrc} key={key} />
          </SwiperSlide>
          )
        })}
        
      </Swiper>
    </>
  );
}
