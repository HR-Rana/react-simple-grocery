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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

      const Catagories3 = Catagories;

  return (
    <div>
      <span>
        <SecTitle SecTitle={'Catagory Section'} subTitle={""} text={""} />
      </span>

      <div className='sec-contain py-10'>
        <Slider {...settings} className='p-0 flex justify-between '>
           {
            Catagories3.map((catagory, index) => {
              return (
                <div key={index} className='!w-[90%] p-0'>
                    <CatagoriesCard name={catagory.name} img={catagory.image}  />
                </div>
              );
            })
           }
        </Slider>
      </div>
    </div>
  )
}



