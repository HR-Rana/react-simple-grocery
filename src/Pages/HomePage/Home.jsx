import React from 'react'
import Hero from './Hero/Hero'
import OfferSection from './Offer/OfferSection'

export default function Home() {
  return (
    <div>
        <Hero/>
       <section>
             <OfferSection />
       </section> 
       <section>
             <OfferSection />
       </section>
    </div>
  )
}
