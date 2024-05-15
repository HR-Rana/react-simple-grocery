import React from 'react'

export default function Input({type, placeholder,classes, Id, Value}) {
  return (
    <input type={type} placeholder={placeholder} id={Id} value={Value} className={classes} />
  )
}
