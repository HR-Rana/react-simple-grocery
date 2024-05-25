import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AllProducts } from '../../DemoData/ProductData';
import ProductCard from '../Cards/ProductCard';


export default function ProductCatagories({parentClass, ItemCatagory }) {
      
   
    const NewValue = AllProducts.filter((items, i)=>{
        return items.catagory === ItemCatagory;
    })

    console.log(NewValue)
  
    // slider settings
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    

  return (
   
        <div className={`Product-catagory-wise ${parentClass}`}>
        {
               <Slider {...settings} className='p-0 flex !justify-between '>
                   {
                     NewValue.map((items, i)=>{
                    const {name, price, image, sold, id, rating, stock, lavel, off} = items;
                    return(
                    <div key={i} className='justify-between'>
                         <ProductCard Name={name} Price={price} img={image} sold={sold} id={id} rating={rating} stock={stock} lavel={lavel} off={off} classes={"rounded-lg border-[.5px] shadow-lg p-3 w-[90%]"} />
                    </div>
                    )
                  })
                   }
                </Slider>
                  
                                      
                }
        </div>

  )
}
