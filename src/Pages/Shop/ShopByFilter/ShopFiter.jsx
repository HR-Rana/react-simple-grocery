import React from 'react'

export default function ShopFiter({filterMap, CheckedFunction}) {
  return (
    <div className='items'>
        {
            filterMap.map((items, i)=>{
                return(
                    <li className='' key={i}>
                    <input type="checkbox"  id="" onChange={(e)=>{CheckedFunction(e)}} />    {items}
                    </li>
                )
            })
        }
    </div>
  )
}
