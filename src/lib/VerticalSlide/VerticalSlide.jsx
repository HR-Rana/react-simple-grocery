// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { AllProducts } from '../../assets/DemoData/ProductData';
import { Link } from 'react-router-dom';

export default function VerticalSlide() {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={true}
      onDurationChange={500}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {
      AllProducts.map((pd, i)=>{
        return(
          <SwiperSlide key={i}>
          <div className='Product card shadow-lg'>
              <Link to={`/Product/${pd.id}`}>
                <div className="card-header">
                    <img src={pd.image} alt={pd.Name} />
              </div>
                <div className="card-body">
                    <h5>Name:{pd.name}</h5>
                    <h6>Price: {pd.price}</h6>
                    <p>Total-Sold: {pd.sold}</p>
                </div>
              </Link>
          </div>
        </SwiperSlide>
        )
      })
       

     }
     
    </Swiper>
  );
};












