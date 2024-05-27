import React from 'react'

export default function CheckoutInvoice() {
  return (
    <div className='flex flex-col h-full '>
        <div className='invoice'>
                <h6>Checkout Invoice</h6>
            <ul>
                <li className='flex justify-between'>
                    <span>Quantity</span> <span>01</span>
                </li> 
                <li className='flex justify-between'>
                    <span>Quantity</span> <span>01</span>
                </li>
            </ul>
        </div>
        <div>
             <button className='w-full'>Checkout</button>
        </div>
    </div>
  )
}
