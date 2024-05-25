import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecTitle from '../../../assets/Components/SectionTitle/SecTitle'
import { Catagories } from '../../../assets/DemoData/ProductData';
import CatagoriesCard from './CatagoriesCard';

export default function CatagorySection() {
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
// Catagories Demo Data //
const Catagories2 = Catagories;


  return (
    <div className='py-10'>
      <span>
        <SecTitle SecTitle={'Shop by Catagory'} />
      </span>

      <div className='sec-contain mt-5'>
        <Slider {...settings} className='p-0 flex justify-between '>
           {
            Catagories2.map((catagory, index) => {
              return (
                <div key={index} className='!w-[90%] p-0'>
                    <CatagoriesCard name={catagory.name} imgClass={'mx-auto flex items-center'} img={catagory.image} bodyclass={"object-cover flex items-center h-[250px] md:h-[350px]"} link={catagory.catagory} />
                </div>
              );
            })
           }
        </Slider>
      </div>
    </div>
  )
}



