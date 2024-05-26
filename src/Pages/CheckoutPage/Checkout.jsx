import React from 'react'
import CheckoutForm from './CheckoutForm'
import CheckoutInvoice from './CheckoutInvoice'

export default function Checkout() {
  return (
    <div className='checkout-page py-5'>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='Order-info'>
                    <span className='p-3'>
                        <h4>Delivery Informaiton</h4>
                        <br />
                        <div>
                           <CheckoutForm />
                        </div>
                    </span>
                </div>
                <div className=''>
                    <CheckoutInvoice />
                </div>
            </div>
        </div>
    </div>
  )
}
