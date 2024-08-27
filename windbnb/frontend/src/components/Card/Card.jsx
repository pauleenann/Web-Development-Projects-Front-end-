import React from 'react'
import './Card.css'

const Card = ({city,country,superHost,title,rating,maxGuests,type,beds,photo}) => {
  return (
    <div className='card-container'>
        <img src={photo} alt="" className='card-img'/>
        <div className="card-info">
            <div className="room-type">
                {superHost?<span>super host</span>:''}
                <p className='room-amenities m-0'>{type}  {beds!=null?beds==1?` . ${beds} bed`:` . ${beds} beds`:''}</p>
            </div>
            <div className="room-rating">
                <i class="fa-solid fa-star"></i>
                <p className='room-rate m-0'>{rating}</p>
            </div>
        </div>
        <div className="card-description">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Card
