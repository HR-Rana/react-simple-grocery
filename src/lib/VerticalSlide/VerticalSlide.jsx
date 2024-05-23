import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function VerticalSlide({mapProduct}) {
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            mapProduct.map((items, i)=>{
                return(
                    <div className='' key={i}>
                         <SwiperSlide>
                            <div className='card'>
                                <div className="card-header">
                                    
                                </div>
                            </div>
                         </SwiperSlide>
                    </div>
                )
            })
        }
      </Swiper>
    </>
  );
}




