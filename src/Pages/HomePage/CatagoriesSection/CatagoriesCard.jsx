import React from 'react'
import Button from '../../../assets/Components/Button/Button'
import { Link } from 'react-router-dom'

export default function CatagoriesCard({img, offer, name}) {
  return (
    <div className='shop-by-catagories w-full shadow-md'>
        <div className='catagories'>
            <div className="card-header">
              <h5>{name}</h5>
              <h6>{offer}</h6>
            </div>
            <div className="card-body">
              <img src={img} alt={name} />
            </div>
            <div className="card-footer">
             <Link to={"/#Shop"} >
              <Button btnName={"Shop Now"} classes={"w-full"} />
             </Link>
            </div>
        </div>
    </div>
  )
}
