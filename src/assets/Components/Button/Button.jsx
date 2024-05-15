import React from 'react'

export default function Button({Function, classes, btnName}) {
  return (
    <button onClick={Function} className={classes}>{btnName}</button>
  )
}
