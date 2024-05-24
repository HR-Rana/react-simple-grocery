import React from 'react'

export default function Advertise({bnrSize, img, video,videoClass, imgClass}) {
  return (
    <div className={`${bnrSize} advertise-banner`}>
        <div className="Adverting-img">
             {
                video? <video src={video} autoPlay loop alt="mp4" className={videoClass}></video> :
                <img src={img} alt="advertise" className={`${imgClass}`} />
             }
        </div>
    </div>
  )
}
