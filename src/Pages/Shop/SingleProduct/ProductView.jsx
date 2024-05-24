import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AllProducts } from '../../../assets/DemoData/ProductData';
import { FaStar } from "react-icons/fa";











export default function ProductView() {
    const { Id } = useParams();

    const data = AllProducts.find((item, index)=>{
        return item.id == Id;
    })


  return (
    <main className='pt-7'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
         <div className=''>
           <img src={data.image} alt={data.name} />
         </div>
          <div>
            <span className=''>
                <h4>{data.name}</h4>
                <br />
                <span className='flex items-center gap-5'>
                <p className='flex font-semibold gap-1'>Rating: ({data.rating}.0) <FaStar className='rating text-orange-400' /></p>
                  <p className='font-semibold'>Sold: {data.sold}</p>
                </span>

                <span>
                    <h6>Price: <span className='text-red-600'>{data.price}</span> Tk <span> Kg/litter</span></h6>
                </span>
                <br />
                <hr />

                <div className="quantity block gap-2">
                      <br />
                    <h5>Product Quantity:</h5>
                    <form action="" className='display block'>
                     <input type="submit" value="-" />
                      <input type="number" name="" id="" placeholder='hello js '  className='border-none'/>
                    </form>
                    <br />
                    <input type="button" value="+" />
                </div>
            </span>
          </div>
      </div>
    </main>
  )
}
