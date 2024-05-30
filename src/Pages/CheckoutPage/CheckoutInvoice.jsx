import React from 'react'

export default function CheckoutInvoice() {
  return (
    <div className='flex flex-col h-full '>
        <div className='invoice'>
                <h6>Checkout Invoice</h6>
            <ul>
                <li>
                    <span>Quantity:</span> <span>01</span>
                </li> 
                <li>
                    <span>Sub-Total:</span> <span>01</span>
                </li>
               <span style={{margin:"20px 0"}}>
                 <hr />
               </span>
               <li><span>Delivery Fee:</span> <span>0</span></li>
               <li><span>Discount:</span> <span>0</span></li>
               <span>
                <hr />
               </span>
               <li>
                <span>Total</span> <span>150 Tk</span>
               </li>
            </ul>
        </div>
        <div>
             <button className='w-full'>Procced Checkout</button>
        </div>
    </div>
  )
}
