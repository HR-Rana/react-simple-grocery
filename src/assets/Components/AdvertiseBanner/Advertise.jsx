import React from 'react'

export default function Advertise({bnrSize, img}) {
  return (
    <div className='advertise-banner'>
        <div className={`${bnrSize} p-3`}>
            <div className="banner-img">
                <img src={img} alt="banner" />
            </div>
        </div>
    </div>
  )
}
