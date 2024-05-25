
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div>
        
        <div className="navigation-bar bg-gray-200 p-5 flex items-center sticky top-0 px-5 justify-between gap-5 w-full">
            <div className="logo">
                <NavLink to={"/"} >
                    <span className='flex items-center gap-2 text-red-700'><FaShoppingBasket className='text-[30px]'/> <h5 className='font-[600] text-[28px] text-green-600'>Grocery</h5></span>
                </NavLink>
            </div>
            <nav className='w-[50%] '>
                <ul className='flex justify-between items-center'>
                    <li>
                        <NavLink to={"/"} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Shop"} >Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/About"} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Contact"} >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Cart"} className='flex items-center' ><FaShoppingCart /><sup className='bg-slate-300 font-[700] rounded-full p-2'>0</sup></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Favourite"}  className='flex items-center' >
                            <MdFavorite />
                                <sup className='bg-slate-300 font-[700] rounded-full p-2'>0</sup>
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Profile"} ><FaCircleUser /></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
