import React, { useState } from 'react'
import { AllProducts } from '../../assets/DemoData/ProductData'
import ProductCard from '../../assets/Components/Cards/ProductCard';
import SecTitle from '../../assets/Components/SectionTitle/SecTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CiGrid2H } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { MdGridOn } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function Shop({id}) {
  const [searchProducts, setSearchProducts]= useState([])

  const SearchFunctionality = (e) =>{
    const newValue = e.target.value === AllProducts.name;
    console.log(newValue)
    return newValue
  }



  


  return (
    <main className='w-full'>
      <Tabs>
        <span className='text-center'>
          <SecTitle SecTitle={"Shop Now"} classes={'mt-5'} />
        </span>
      <div className="shop-layout w-full ">
        <div className="items-center bg-gray-100 px-5 py-3  flex justify-between">
          <span className='w-[20%]'>
            <input type="search" placeholder='Search any Product...' className='p-2 rounded-md outline-0 w-full' onChange={SearchFunctionality} />
          </span>

          <div className="product-tabs">
        {/* Product tabs buttons */}
          <TabList className={"flex items-center"}>
            <Tab><MdGridOn /></Tab>
            <Tab><IoGrid /></Tab>
            <Tab><CiGrid2H /></Tab>
          </TabList>
 
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="left-Asidebar sticky top-0 w-[25%]">
          <div className="clear-filter w-[90%] mt-3 mx-auto">
                <button className='w-full bg-red-800 space-2'>Clear Filter</button>
              </div>
              <div className="filter">
                <h6>Shop by Price</h6>
                  <ul>
                    <li><input type="range" name="" id="" className='w-full cursor-pointer' /></li>
                </ul>
              </div>  
              <div className="filter">
                <h6>Shop by Catagories</h6>
                  <ul>
                    <li><input type="checkbox" name="" id="all" /><label htmlFor="all">All</label></li> 
                    <li><input type="checkbox" name="" id="vegetable" /><label htmlFor="vegetable">Vegetables</label></li> 
                    <li><input type="checkbox" name="" id="fish" /><label htmlFor="fish">Fish</label></li>
                    <li><input type="checkbox" name="" id="Fruit" /><label htmlFor="Fruit">Fruits</label></li>
                    <li><input type="checkbox" name="" id="drinks" /><label htmlFor="drinks">Drinks</label></li>
                </ul>
              </div>   
              <div className="filter">
                <h6>Shop by Lavel</h6>
                  <ul>
                    <li><input type="checkbox" name="" id="LAll" /><label htmlFor="LAll">All</label></li> 
                    <li><input type="checkbox" name="" id="New" /><label htmlFor="New">New</label></li> 
                    <li><input type="checkbox" name="" id="Popular" /><label htmlFor="Popular">Popular</label></li>
                    <li><input type="checkbox" name="" id="Featured" /><label htmlFor="Featured">Featured</label></li>
                  </ul>
              </div> 
              {/* filter by Rating system */}
              <div className="filter">
                <h6 className=''>Shop by Rating</h6>
                <ul className='flex flex-col mt-2 gap-3 '>
                  <li value={5}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar />
                  </li>
                  <li value={4}><FaStar /><FaStar /><FaStar /><FaStar />
                  </li> 
                  <li value={3}><FaStar/><FaStar/><FaStar/>
                  </li> 
                  <li value={2}><FaStar/><FaStar/>
                  </li>
                  <li value={1}><FaStar  />
                  </li>
                </ul>
              </div>
              
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
