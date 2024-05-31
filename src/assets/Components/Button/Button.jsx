import React from 'react'

export default function Button({Function,Fparam, classes, btnName}) {
  return (
    <button type='button' onClick={(e)=>{''}} className={`btn ${classes}`}>{btnName}</button>
  )
}
