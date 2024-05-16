import React from 'react'

export default function SecTitle({classes, text, SecTitle, subTitle}) {
  console.log(SecTitle)
  return (
    <div className={`section-title ${classes}`}>
      <span className=''>
            {text ? <p className='text'>{text}</p> : null}
          {
            SecTitle? <h3 className='title'>{SecTitle}</h3> : null
          }
          {
            subTitle ? <p className='text'>{subTitle}</p> : null
          }
      </span>
    </div>
  )
}
