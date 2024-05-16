import React from 'react'
import Button from '../../../assets/Components/Button/Button'
import { Link } from 'react-router-dom'

export default function Catagories({img, offer, name}) {
  return (
    <div className='shop-by-catagories shadow-md'>
        <h3>Shop by Catagories</h3>
        <div className='catagories'>
            <div className="card-header">
              <h3>{name}</h3>
              <h5>{offer}</h5>
            </div>
            <div className="card-body">
              <img src={img} alt={name} />
            </div>
            <div className="card-footer">
             <Link to={"/#Shop"} >
              <Button name="Shop Now" classes={""} />
             </Link>
            </div>
        </div>
    </div>
  )
}
