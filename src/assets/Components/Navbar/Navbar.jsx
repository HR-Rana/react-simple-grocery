import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div>
        
        <div className="navigation-bar bg-gray-200 p-5 flex items-center sticky top-0 px-5 justify-between gap-5 w-full">
            <div className="logo">
                <Link to={"/"} >
                    <span className='flex items-center gap-2'><FaShoppingBasket /> <h3>Grocery</h3></span>
                </Link>
            </div>
            <nav className='w-[50%] '>
                <ul className='flex justify-between'>
                    <li>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/Shop"} >Shop</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"} >Contact</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"} className='flex items-center' ><FaShoppingCart /><sup>0</sup></Link>
                    </li>
                    <li>
                        <Link to={"/Contact"} ><MdFavorite /></Link>
                    </li>
                    <li>
                        <Link to={"/Contact"} ><FaCircleUser /></Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
