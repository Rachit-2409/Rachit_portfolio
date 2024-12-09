import '../card/Card.css';

let Card = (images) => {
    return(
<div className='Card_box'>
<img src={images} alt="pic" />
</div>
    )
}

export default Card;