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
            <img src={img} alt="image" className='object-contain flex-shrink-0 w-full h-[150px] md:h-[200px]' />
            <div className='lavel absolute top-1 left-0 bg-slate-400 rounded px-1' style={{backgroundColor:""}}>
              <p className='text-[10px] py-[1px] sm:text-[14px] px-1 sm:py-[2px] text-white font-semibold'>{lavel}</p>
            </div>
            {/* {
              console.log(lavelColor.color)
            } */}
        </div>
        <div className="card-body flex flex-col gap-1 mb-3">
            <h5 className='text-[16px] sm:text-[20px] md:text-[24px] font-semibold space-x-1 capitalize'>{Name}</h5>
            <p className='flex items-center gap-1'>Sold:{sold} | {rating}<span><FaStar className='rating' /></span></p>
            <p>{price}</p>
        </div>
        <div className="card-footer flex flex-col sm:flex-row justify-between  gap-2">
          <Button btnName={"Add to Cart"} classes={"bg-gray-300 shadow-xl  w-[100%] text-[12px]"}/>

          <Button btnName={"Buy Now"} classes={"bg-green-700 shadow-xl w-[100%] text-[12px]"} />
        </div>
    </div>
  )
}
