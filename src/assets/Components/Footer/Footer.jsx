import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='p-5 bg-slate-200  '>
        

        <div className="copywrits flex items-center justify-center text-black">
          <p>&copy; all right reserved 2024 | developed by <Link to={'/'} className='underline'>Rana</Link></p>
        </div>
    </div>
  )
}
