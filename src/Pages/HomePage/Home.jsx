import React from 'react'
import Hero from './Hero/Hero'
import OfferSection from './Offer/OfferSection'
import CatagorySection from './CatagoriesSection/CatagorySection'
import SecTitle from '../../assets/Components/SectionTitle/SecTitle'
import ProductCatagories from '../../assets/Components/ProductCatagories/ProductCatagories'

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
       <section>
          <div className=''>
              <SecTitle SecTitle={"Fruites Items"} />
          </div>
          <span>
              <ProductCatagories ItemCatagory={"Fruites"}  />
          </span>
       </section>
    </div>
  )
}
