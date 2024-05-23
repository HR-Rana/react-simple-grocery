import React from 'react'

export default function Pagination() {
  return (
    <div className='pagination flex items-center gap-3'>
        <button>Previous</button>
        <ul className='flex gap-5 items-center'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <button>Next</button>
    </div>
  )
}
