import React from 'react'
import Button from '../../../assets/Components/Button/Button'
import { Link } from 'react-router-dom'

export default function CatagoriesCard({img, offer, name}) {
  return (
    <div className='shop-by-catagories w-full p-3 shadow-inner'>
        <div className='catagories'>
            <div className="card-header">
              <h6>{name}</h6>
              <h6>{offer}</h6>
            </div>
            <div className="card-body h-[200px] object-contain">
              <img src={img} alt={name}  className=''/>
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
