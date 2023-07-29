import React from 'react'
import LimitedOffer from './LimitedOffer'
import '../App.css'

const Banner = () => {
  return (
    <div className='banner'>
        {/* <LimitedOffer /> */}
        <div className="limted-of">
            <img src='clock.png' alt="" />
            <p>Limited Time Offer</p>
        </div>
        <div className="countdown">
            <p>Ends IN : </p>
            <div className='count' ><LimitedOffer /></div>
        </div>
        <div className="offer-code">
            <p>Get 10% OFF</p>
            <p><span>Use Code:</span> <b>EXAMSTART</b></p>
        </div>
    </div>
  )
}

export default Banner