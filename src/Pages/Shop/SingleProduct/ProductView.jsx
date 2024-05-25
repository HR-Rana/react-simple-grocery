import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AllProducts } from '../../../assets/DemoData/ProductData';
import { FaStar } from "react-icons/fa";
import SecTitle from '../../../assets/Components/SectionTitle/SecTitle';
import ProductCatagories from '../../../assets/Components/ProductCatagories/ProductCatagories';











export default function ProductView() {
    const { Id } = useParams();

    const [quantity, setQuantity]=useState(1)
    const [increase, setIncrease] = useState();
    const [discrease, setDiscrease]=useState()

    const data = AllProducts.find((item, index)=>{
        return item.id == Id;
    })

    const RelatedProduct  = (data)=>{
      console.log(data)
      const Result = AllProducts.map((item)=> item.catagory === data);
      console.log(Result);
      return(Result)
    }



   


    const handleIncrease = ()=>{
      if(quantity >= 0){
          setQuantity(quantity + 1)
      }
    } 
    
    const handleDiscrease = ()=>{
      if(quantity >= 2){
          setQuantity(quantity - 1)
      }
    }



  return (
    <main className='py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
         <div className='w-[95%] mx-auto'>
           <img src={data.image} alt={data.name} />
         </div>
          <div className='w-[95%] mx-auto'>
            <span className=''>
                <h4>{data.name}</h4>
                <br />
                <span className='flex items-center gap-5'>
                <p className='flex font-semibold gap-1'>Rating: ({data.rating}.0) <FaStar className='rating text-orange-400' /></p>
                  <p className='font-semibold'>Sold: {data.sold}</p>
                </span>

                <span className='flex gap-2 mb-2 items-center'>
                    <h6>Price: <span className='text-red-600'>{data.price}</span> Tk</h6>
                   {
                     data.weight?
                    <span className='font-semibold text-[14px] text-orange-500'>{data.weight}</span>:null
                  }
                </span>
                <span>
                   <p>{data.description}</p>
                </span>
                <br />
                <hr />

                <div className="quantity">
                      <br />
                    <h5>Product Quantity:</h5>
                    <form action="" className='flex gap-3 mt-5'>
                     <input type="button" value="-" className='discreament' onClick={()=> handleDiscrease()} />
                      <input type="number" name="" id=""  value={quantity} onChange={(e)=>{setQuantity(parseInt(e.target.value))}} className='border-[1px] w-[60px] outline-none font-semibold'/>
                     <input type="button" value="+" className='increament' onClick={()=> handleIncrease()} />
                    </form>
                  <div className="buttons my-6 flex flex-col gap-3 w-1/2">
                      <button className='bg-red-700'>Add to Cart</button>
                      <button>Buy Now</button>
                  </div>
                </div>
            </span>
          </div>
      </div>
      <section className='Fruites'>
          <span>
            <div className=''>
                <SecTitle SecTitle={"Related Products"} />
            </div>
            <span>
                <ProductCatagories ItemCatagory={data.catagory}  />
            </span>
          </span>
       </section> 
    </main>
  )
}
