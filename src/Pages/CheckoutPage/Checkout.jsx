import React from 'react'
import CheckoutForm from './CheckoutForm'
import CheckoutInvoice from './CheckoutInvoice'

export default function Checkout() {
  return (
    <div className='checkout-page py-5'>
        <div className='w-[100%]  md:w-[80%] mx-auto'>
            <div className="block md:flex   gap-5 justify-between">
                <div className='Order-info mb-5 md:mb-0 bg-gray-100 p-5 md:p-0 w-[100%] md:w-[55%]'>
                     <h4>Delivery Informaiton</h4>
                    <span className='p-3'>
                        <div>
                           <CheckoutForm />
                        </div>
                    </span>
                </div>
                <div className='flex flex-col items-center align-middle h-[100%] gap-5  w-[100%] md:w-[40%]'>
                   <div className='checkout-view items-center w-full bg-gray-100'>
                     <CheckoutInvoice />
                   </div>
                   <div className='checkout-view'>
                        <h6>Condition</h6>
                        <ul>
                            <li>Let us, if you don't have got the Right Product</li>
                            <li>Return the Product, if there is any Product Issue</li>
                            <li>We don't Return Product without proper Reason or issue</li>
                        </ul>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
