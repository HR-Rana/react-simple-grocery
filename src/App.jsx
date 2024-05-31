
import { BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Footer from './assets/Components/Footer/Footer'
import Routing from './RoutingPage/Routing'
import { useEffect, useReducer, useState } from 'react'
import { ProductReducer, initialState } from './assets/Reducer/ProductReducer'


function App() {
   

  const handleNav = ()=>{
    console.log("working")
  }


  const [state, dispatch] = useReducer(ProductReducer, initialState)
    
  useEffect(() => {
    if (window.location.pathname === "/Profile") {
      dispatch({
        type:"HIDE_NAVBAR",

        payload: true
      })   
    }

  }, []);



  return (
    <>
     <BrowserRouter>
          {
            state ?   <Navbar />  : null
          }
          <Routing />
        {
          state ? <Footer /> : null
        }
     </BrowserRouter>
    </>
  )
}

export default (App)
