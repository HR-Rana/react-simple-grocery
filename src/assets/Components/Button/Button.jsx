import React from 'react'

export default function Button({Function, classes, btnName}) {
  return (
    <button type='button' onClick={Function} className={`btn ${classes}`}>{btnName}</button>
  )
}
