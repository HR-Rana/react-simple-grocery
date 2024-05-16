import React from 'react'
import Hero from './Hero/Hero'
import OfferSection from './Offer/OfferSection'
import CatagorySection from './CatagoriesSection/CatagorySection'

export default function Home() {
  return (
    <div>
        <Hero/>
       <section>
             <OfferSection />
       </section> 
       <section>
             <CatagorySection />
       </section>
    </div>
  )
}
