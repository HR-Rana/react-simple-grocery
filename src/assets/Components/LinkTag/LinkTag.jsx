
import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkTag({name, Path}) {
  return (
    <Link to={Path} >{name}</Link>
  )
}
