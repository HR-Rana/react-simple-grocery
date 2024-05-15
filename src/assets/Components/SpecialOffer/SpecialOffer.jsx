import React from 'react'
import Button from '../Button/Button'

export default function SpecialOffer({classes, offerTitle,img, offer }) {
  return (
    <div className={`flex justify-between items-center h-[100%] ${classes}`}>
        <div className='offer-text flex flex-col gap-2'>
            <h4>{offerTitle}</h4>
            <h5>{offer}</h5>
            <Button btnName={"Checkout"} classes={''} />
        </div>
        <div className='overflow-hidden w-1/2'>
            <img src={img} alt="product" className=' bottom-0 hover:scale-[1.06] transiton-all duration-500' />
        </div>
    </div>
  )
}
