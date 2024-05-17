import React from 'react'
import { AllProducts } from '../../assets/DemoData/ProductData'
import ProductCard from '../../assets/Components/Cards/ProductCard';
import SecTitle from '../../assets/Components/SectionTitle/SecTitle';

export default function Shop({id}) {


  return (
    <main className=''>
        <span className='text-center'>
          <SecTitle SecTitle={"Shop Now"} classes={'mt-5'} />
        </span>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-3'>
        {
          AllProducts.map((items, index)=>{
            const {name,id, rating, price, off, lavel, image,sold }= items;
            return(
              <div className='w-[90%] mx-auto my-3 h-[100%] ' key={index}>
                 <ProductCard Name={name} Price={price} img={image} sold={sold} id={id} rating={rating} lavel={lavel} off={off} classes={"rounded-lg border-[.5px] shadow-lg p-3"} />
              </div>
            )
          })
        }
      </div>
      
    </main>
  )
}
