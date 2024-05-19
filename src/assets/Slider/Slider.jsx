import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
    <div>
       <Slider {...settings} className='p-0 flex justify-between '>
                   {
                     NewValue.map((items, i)=>{
                      const {name, price, image, sold, id, rating, stock, lavel, off} = items;
                      return(
                      <div key={i}>
                           <ProductCard Name={name} Price={price} img={image} sold={sold} id={id} rating={rating} stock={stock} lavel={lavel} off={off} classes={"rounded-lg border-[.5px] shadow-lg p-3"} />
                      </div>
                      )
                    })
                   }
        </Slider>
    </div>
  )
}
