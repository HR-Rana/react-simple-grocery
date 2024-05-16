import React from 'react'
import { FaStar } from "react-icons/fa";
import Button from '../Button/Button';

export default function ProductCard({img, Name,sold, rating }) {
  return (
    <div className='card shadow-md'>
        <div className="card-header">
            <img src={img} alt="image" />
            <div className='lavel'>
              <p>{lavel}</p>
            </div>
        </div>
        <div className="card-body">
            <h2>{Name}</h2>
            <p className='flex items-center gap-3'>Sold:{sold} | {rating} <span><FaStar className='rating' /></span> </p>
            <p>{price}</p>
        </div>
        <div className="card-footer">
          <Button btnName={"Add to Cart"} classes={"bg-gray-300"}/>

          <Button btnName={"Buy Now"} classes={"bg-green-500"} />
        </div>
    </div>
  )
}
