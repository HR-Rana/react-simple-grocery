// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { AllProducts } from '../../assets/DemoData/ProductData';
import { Link } from 'react-router-dom';
import { SliceProduct } from '../../assets/Functions/Functions';

export default function VerticalSlide() {

let random = Math.random(AllProducts);
// Slice Product Function
let sliceData = SliceProduct(5, 12);  

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{delay:2500}}
      pagination={true}
      onDurationChange={500}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {
      sliceData.map((pd, i)=>{
        return(
          <SwiperSlide key={i}>
          <div className='Product card py-3 px-2'>
              <Link to={`/Product/${pd.id}`}>
                <div className="card-header h-[250px]">
                    <img src={pd.image} alt={pd.name} />
              </div>
                <div className="card-body flex flex-col gap-1 p-2">
                    <h6>{pd.name}</h6>
                    <p className='font-semibold'>Price: {pd.price}Tk</p>
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












