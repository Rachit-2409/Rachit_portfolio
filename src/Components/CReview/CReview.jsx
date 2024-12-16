import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

import Slider from '../Slider/Slider'

gsap.registerPlugin(useGSAP, ScrollTrigger);
import ReviewCard from "../ReviewCard/ReviewCard";
const CReview = () => {
  // useGSAP(()=>{
  //   gsap.to('.srcub-slide', {
  //     scrollTrigger : {
  //       trigger : '.srcub-slide',
  //       scrub : true
  //     },
  //     x: '-320'
  //   })
  // })
  
  return (
    <section className="section overflow-hidden" id="reviews">
        <div className="container">
      <h2 className="headline-2 mb-8"> 
        Figma Designs
      </h2>
      <Slider />
      <div className="flex items-stretch gap-3 w-fit srcub-slide">

     
    {/* {
      reviews.map(({content, imgSrc, company, name}, key)=>{
        return(
          <ReviewCard  content={content} imgSrc={imgSrc} name={name} company={company} key={key}/>
        )
      })
    } */}
        
      </div>
        </div>
    </section>
  )
}

export default CReview