import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import '../../index.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import ReviewCard from '../ReviewCard/ReviewCard';

export default function Slider() {
  const reviews = [
    {
   
      imgSrc: '/images/people-1.png',
      link : 'https://www.figma.com/design/NZOrRsk2uHQcpeCM7kosbG/Hello?node-id=0-1&t=mgck7yhUrib1kWC5-1'
 
    },
    {
     
      imgSrc: '/images/people-2.png',
      link : 'https://www.figma.com/design/EHEeQJPyHZjqG3CakWfmw3/BMW-i4?t=mgck7yhUrib1kWC5-1'
    
    },
    {
     
      imgSrc: '/images/people-3.png',
      link : 'https://www.figma.com/design/LDAYX5ZpGDrKrRbt47Gg4E/Sea?t=mgck7yhUrib1kWC5-1'
      
    },
    {
    
      imgSrc: '/images/people-4.png',
      link : 'https://www.figma.com/design/K5V6IQswxRfWsmkPkvYJmc/Game-Console?t=mgck7yhUrib1kWC5-1'
  
    },
    {
    
      imgSrc: '/images/people-5.png',
      link : 'https://www.figma.com/design/IuFTk7V78EDW6JJOLLmZCu/Educational-Website-Hero?t=mgck7yhUrib1kWC5-1'
      
    },
    {
    
      imgSrc: '/images/people-6.png',
      link : 'https://www.figma.com/design/ib1P1adqjWmqgSmqgzHCNf/Nidhi-FInserv?t=mgck7yhUrib1kWC5-1'
     
    }
    ,
    {
    
      imgSrc: '/images/people-7.png',
      link : 'https://www.figma.com/design/1OrquRgAeu1U2Y9hHVIwV7/Background-Assignment?t=mgck7yhUrib1kWC5-1'
     
    },
    {

      imgSrc: '/images/people-8.png',
      link : 'https://www.figma.com/design/rbITb57lpKinY3t6yCFJ6v/Tier?t=mgck7yhUrib1kWC5-1'
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
  spaceBetween={30}
  breakpoints={points}
  pagination={{
    clickable: true, // Also set to true to ensure pagination works if needed
  }}
  autoplay={{ // Use lowercase 'autoplay'
    delay: 2500,
    disableOnInteraction: true,
  }}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
>
  {reviews.map(({imgSrc, link }, key) => {
    return (
      <SwiperSlide key={key}>
        <ReviewCard  imgSrc={imgSrc} key={key}  link={link}/>
      </SwiperSlide>
    );
  })}
</Swiper>

    </>
  );
}
