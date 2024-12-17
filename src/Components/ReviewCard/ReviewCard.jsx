import PropTypes from "prop-types";

// Import Swiper React components



const ReviewCard = ({ name, imgSrc, link}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] ">
         
        <div className="flex  gap-2 mt-auto flex-col items-start">
        <figure className="img-box rounded-lg">
                <img src={imgSrc} alt={name} className="img-cover" height={44} width={44} loading="lazy"/>
        </figure>
       
      <a href={link} target="_blank">
      <button className="bg-cyan-700 p-2 rounded-lg hover:bg-cyan-800">
          <span className="material-symbols-rounded flex justify-center items-center" aria-hidden='true'>
                    arrow_outward
                </span>
        </button></a> 
        </div>
        
    </div>


  )
}


ReviewCard.propTypes = {
    imgSrc : PropTypes.string.isRequired
}

export default ReviewCard
