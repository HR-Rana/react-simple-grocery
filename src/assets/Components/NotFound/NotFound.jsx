import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../../Images/404Page.jpg'

export default function NotFound() {
  return (
    <div className='Not-found py-8 min-h-[100dvh]'>
        <span className='flex gap-2 justify-center text-center'>
            <p className='text-red-500'>Sorry, we couldn't found the page </p>
            <Link to={'/'} className='font-bold text-red-400 underline'>Back to Home</Link>
        </span>
        <div className="image flex items-center justify-center">
            <img src={notfound} alt="404 not-found" className='w-1/2' />
        </div>
    </div>
  )
}
