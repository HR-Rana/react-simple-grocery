import React, { useState } from 'react'
import { AllProducts } from '../../assets/DemoData/ProductData'
import ProductCard from '../../assets/Components/Cards/ProductCard';
import SecTitle from '../../assets/Components/SectionTitle/SecTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CiGrid2H } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { MdGridOn } from "react-icons/md";


export default function Shop({id}) {
  const [searchProducts, setSearchProducts]= useState([])

  const SearchFunctionality = (e) =>{
    const newValue = e.target.value === AllProducts.name;
    setSearchProducts({ ...searchProducts, newValue});
    console.log(newValue)
  }

console.log(searchProducts)

  return (
    <main className='w-full'>
      <Tabs>
        <span className='text-center'>
          <SecTitle SecTitle={"Shop Now"} classes={'mt-5'} />
        </span>
      <div className="shop-layout w-full ">
        <div className="Grid-and-searchbar  px-5 py-3  flex justify-between">
          <span>
            <input type="search" placeholder='Search any Product...' className='p-2 border border-black' onChange={SearchFunctionality} />
          </span>

          <div className="product-tabs">
        {/* Product tabs buttons */}
          <TabList>
            <Tab><MdGridOn /></Tab>
            <Tab><IoGrid /></Tab>
            <Tab><CiGrid2H /></Tab>
          </TabList>
 
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="left-Asidebar w-[25%]">

          </div>
          <div className="right-site-products w-[75%]">
             <TabPanel>
             <div className='grid w-[100%] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-3'>
              {
                AllProducts.map((items, index)=>{
                  const {name,id, rating, price, off, stock, lavel, image,sold }= items;
                  return(
                    <div className='w-[90%] mx-auto my-3 h-[100%] ' key={index}>
                      <ProductCard Name={name} Price={price} img={image} sold={sold} id={id} rating={rating} stock={stock} lavel={lavel} off={off} classes={"rounded-lg border-[.5px] shadow-lg p-3"} />
                    </div>
                  )
                })
              }
            </div>
              </TabPanel> 
              <TabPanel>
                <div className='grid w-[100%] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-3'>
                  {
                    AllProducts.map((items, index)=>{
                      const {name,id, rating, price, off, stock, lavel, image,sold }= items;
                      return(
                        <div className='w-[90%] mx-auto my-3 h-[100%] ' key={index}>
                          <ProductCard Name={name} Price={price} img={image} sold={sold} id={id} rating={rating} stock={stock} lavel={lavel} off={off} classes={"rounded-lg border-[.5px] shadow-lg p-3"} />
                        </div>
                      )
                    })
                  }
                </div>
                </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-1  lg:grid-cols-1 my-3'>
                  {
                    AllProducts.map((items, index)=>{
                      const {name,id, rating, price, off, stock, lavel, image,sold }= items;
                      return(
                        <div className='w-[90%] mx-auto my-3 h-[100%] ' key={index}>
                          <ProductCard Name={name} Price={price} img={image} sold={sold} id={id} rating={rating} stock={stock} lavel={lavel} off={off} classes={"rounded-lg border-[.5px] shadow-lg p-3"} />
                        </div>
                      )
                    })
                  }
                </div>
              </TabPanel>
          </div>
        </div>
      </div>
      </Tabs>
    </main>
  )
}
