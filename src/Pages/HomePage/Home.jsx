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
       <section className='Fruites'>
          <span>
            <div className=''>
                <SecTitle SecTitle={"Fruites Items"} />
            </div>
            <span>
                <ProductCatagories ItemCatagory={"Fruites"}  />
            </span>
          </span>
       </section> 
       <section>
          <span>
            <div className='' id='Fish'>
                <SecTitle SecTitle={"Fish Items"} />
            </div>
            <span>
                <ProductCatagories ItemCatagory={"Fishes"}  />
            </span>
          </span>
       </section> 
       <section id='Drinks'>
          <span>
            <div className=''>
                <SecTitle SecTitle={"Soft Drinks Items"} />
            </div>
            <span>
                <ProductCatagories ItemCatagory={"SoftDrinks"}  />
            </span>
          </span>
       </section> 
       <section id='Vegetables'>
          <span>
            <div className=''>
                <SecTitle SecTitle={"Vegetable Items"} />
            </div>
            <span>
                <ProductCatagories ItemCatagory={"Vegetables"}  />
            </span>
          </span>
       </section>
    </div>
  )
}
