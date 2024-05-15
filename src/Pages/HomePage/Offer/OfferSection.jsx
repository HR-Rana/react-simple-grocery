import React from 'react'
import SpecialOffer from '../../../assets/Components/SpecialOffer/SpecialOffer'
import image1 from '../../../assets/Images/banner-2.jpg'
import image2 from '../../../assets/Images/banner-1.jpg'

export default function OfferSection() {
  return (
    <div className='my-[30px]'>
        <div className=' flex grid-cols-2 px-5 gap-5 justify-between '>
            <div className='w-[45%]'>
                <SpecialOffer img={image1} offerTitle={"Special offer for you"} offer={"flat 35% Off"} />
            </div> 
            <div className='w-[45%]'>
                <SpecialOffer img={image2} offerTitle={"Special offer Flat discount"} offer={"flat 35% Off"} />
            </div>
        </div>
    </div>
  )
}
