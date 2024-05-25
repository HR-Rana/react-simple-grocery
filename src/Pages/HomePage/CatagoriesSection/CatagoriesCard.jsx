import React from 'react'
import Button from '../../../assets/Components/Button/Button'
import { Link } from 'react-router-dom'

export default function CatagoriesCard({img, offer, name,imgClass,bodyclass, link}) {
  console.log(link)
  return (
    <div className='shop-by-catagories w-full p-3 shadow-inner'>
        <div className='catagories'>
            <div className="card-header">
              <h6>{name}</h6>
              <h6>{offer}</h6>
            </div>
            <div className={`card-body ${bodyclass}`}>
              <img src={img} alt={name}  className={`${imgClass}`}/>
            </div>
            <div className="card-footer">
             <Link to={`${link}`} >
              <Button btnName={"Shop Now"} classes={"w-full"} />
             </Link>
            </div>
        </div>
    </div>
  )
}
