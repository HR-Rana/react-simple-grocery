import React from 'react'

export default function Advertise({bnrSize, img, imgClass}) {
  return (
    <div className={`${bnrSize} advertise-banner`}>
        <div className="banner-img">
             <img src={img} alt="banner" className={`${imgClass}`} />
        </div>
    </div>
  )
}
