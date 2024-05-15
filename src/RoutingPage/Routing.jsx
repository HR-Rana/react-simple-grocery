import React, { Profiler } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/HomePage/Home'
import ProfilePage from '../Pages/Profile/Profile'
import Cart from '../Pages/Cart/Cart'
import FavoritePage from '../Pages/Favourite/Favorite'
import Shop from '../Pages/Shop/Shop'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/Shop' element={<Shop />} /> 
        <Route path='/Single-Product' element={<Shop />} /> 
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Favorite' element={<FavoritePage />} />
        <Route path='/Profile' element={<ProfilePage />} />
    </Routes>
  )
}
