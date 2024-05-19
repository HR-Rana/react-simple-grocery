import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import Button from '../Button/Button';
import { FaHeart } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { DiscountFunc } from '../../Functions/Functions';




export default function ProductCard({img,classes,off, stock, lavel, Name,sold, rating, id, Price }) {




// Stock out functionality
let stocks;
if(1 < parseInt(stock)){
  stocks = true;
}else{
  stocks = false
}




  return (
    <div className={`card ${classes}`}>
        <div className="card-header relative h-full">
            <img src={img} alt="image" className='object-contain flex-shrink-0 w-full h-[150px] md:h-[200px]' />
           
              <div className='lavel absolute top-1 left-0 bg-slate-400 rounded px-1' style={{backgroundColor:""}}>
               {
                off?  <p className='text-[10px] py-[1px] sm:text-[14px] px-1 space-x-1 sm:py-[2px] text-orange-900 font-semibold'>-{off}</p> :  <p className='text-[10px] py-[1px] sm:text-[14px] px-1 sm:py-[2px] text-white font-semibold'>{lavel}</p>
               }
              </div>

            
           <div className='favorit-view absolute top-0 right-0 flex flex-col gap-3'>
              <span title={"Favorite"}>
                <FaHeart />
              </span> 
              <span title='Share this'>
                <FaShareAlt />
              </span>
              <span title='View Product'>
                <Link to={`/Product/${id}`}>
                  <IoEye />
                </Link>
              </span>
           </div>
        </div>
        <div className="card-body h-full justify-between flex flex-col gap-1 mb-3">
            <h5 className='text-[16px]  md:text-[20px] font-semibold space-x-1 capitalize'>{Name}</h5>
          
          <p className='flex items-center gap-1'>Sold:{sold} | {rating}.0<span className='flex items-center gap-1'><FaStar className='rating text-orange-400' />Rating</span></p>
          
          <span className='flex'>
            <p className='font-semibold flex justify-between'>Price: 
            {
              off? <del><span className='text-red-500 pb-[5px] opacity-60 '> {Price}</span></del> : <span className='text-red-500'>{Price}</span>
            }
           
            {
              // discount price
              off? <span className='text-red-500 ml-3'> {DiscountFunc(Price, off)}</span> : null
            }
            Tk</p>
          </span>

        </div>
        {
          stock ? <div className="card-footer flex flex-col sm:flex-row justify-between uppercase gap-2">
          <Button btnName={"Add to Cart"} classes={" bg-red-800  uppercase shadow-xl  w-[100%] text-[12px] p-0 py-2"}/>

          <Button btnName={"Buy Now"} classes={"bg-green-700 shadow-xl uppercase w-[100%] text-[12px] p-0 py-2"} />
        </div> : <button className='w-full bg-slate-200 p-0 py-2' disabled>Stock out</button>

        }
    </div>
  )
}
