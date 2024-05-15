import React from 'react'
import bannerImg from '../../../assets/Images/home-img.png'
import Button from '../../../assets/Components/Button/Button'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 items-center md:grid-cols-2  '>
        <div>
            <img src={bannerImg} alt="image" />
        </div>
       <div className='flex flex-col self-center w-[60%] gap-4'>
            <h4>Fresh And Organic</h4>
            <h1 className='font-bold space-x-2'>Get Your Daily Grocery Products</h1>
             <Button btnName={"Let's Start"} classes={"btn btn-primary w-[50%]"} />
       </div>
    </div>
  )
}
