import React, { Profiler } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/HomePage/Home'
import ProfilePage from '../Pages/Profile/Profile'
import Cart from '../Pages/Cart/Cart'
import FavoritePage from '../Pages/Favourite/Favorite'
import Shop from '../Pages/Shop/Shop'
import ProductView from '../Pages/Shop/SingleProduct/ProductView'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import NotFound from '../assets/Components/NotFound/NotFound'
import Checkout from '../Pages/CheckoutPage/Checkout'

export default function Routing() {
  return (
    <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<Home />} /> 
        <Route path='/Shop' element={<Shop />} /> 
        <Route path='/About' element={<About />} /> 
        <Route path='/Product/:Id' element={<ProductView />} /> 
        <Route path='/Checkout' element={<Checkout />} /> 
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Favorite' element={<FavoritePage />} />
        <Route path='/Profile' element={<ProfilePage />} />
        <Route path='/Contact' element={<Contact />} />
    </Routes>
  )
}
