import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AllProducts } from '../../../assets/DemoData/ProductData';
import SecTitle from '../../../assets/Components/SectionTitle/SecTitle';

export default function ProductView() {
    const { Id } = useParams();

    const data = AllProducts.find((item, index)=>{
        return item.id == Id;
    })


  return (
    <main>
        <span className='text-center'>
          <SecTitle SecTitle={data.name} classes={'mt-5'} />
        </span>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-3'>
        <img src={data.image} alt={data.name} />
      </div>
    </main>
  )
}
