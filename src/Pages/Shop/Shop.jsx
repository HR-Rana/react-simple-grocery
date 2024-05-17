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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-3'>
        {
          AllProducts.map((items, index)=>{
            const {name, rating, price, off, lavel, image,sold }= items;
            return(
              <div className='w-[90%] mx-auto my-3 h-[100%] ' key={index}>
                 <ProductCard Name={name} Price={price} img={image} sold={sold} rating={rating} lavel={lavel} classes={"rounded-lg shadow-lg p-3"} />
              </div>
            )
          })
        }
      </div>
      
    </main>
  )
}
