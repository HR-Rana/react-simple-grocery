import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import Button from '../Button/Button';

export default function ProductCard(
  {img,classes, lavel, Name,sold, rating, price }) {

  const [lavelColor, setLavelColor] = useState("")





  console.log(lavelColor)


  return (
    <div className={`card ${classes}`}>
        <div className="card-header relative h-full">
            <img src={img} alt="image" className='object-contain w-full h-[200px]' />
            <div className='lavel absolute top-1 left-0 bg-slate-400 rounded px-1' style={{backgroundColor:""}}>
              <p className='text-[14px] px-1 text-white font-semibold'>{lavel}</p>
            </div>
            {
              console.log(lavelColor.color)
            }
        </div>
        <div className="card-body">
            <h5>{Name}</h5>
            <p className='flex items-center gap-1'>Sold:{sold} | {rating}<span><FaStar className='rating' /></span></p>
            <p>{price}</p>
        </div>
        <div className="card-footer flex justify-between my-1">
          <Button btnName={"Add to Cart"} classes={"bg-gray-300 shadow-xl"}/>

          <Button btnName={"Buy Now"} classes={"bg-green-700 shadow-xl"} />
        </div>
    </div>
  )
}
