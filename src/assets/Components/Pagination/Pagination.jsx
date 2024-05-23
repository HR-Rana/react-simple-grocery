import React, { useState } from 'react'

export default function Pagination({PerPage, totalProduct, pageNumber, next, prev}) {
    const [activePage, setActivePage] = useState(1);

    let PageNumbers =[];

    for (let i = 1; i <= Math.ceil(totalProduct/PerPage); i++) {
        PageNumbers.push(i)
    }



    const handleClick=(num)=>{
        setActivePage(num);
        pageNumber(num);
    }

      const prevbtn =()=>{
       if (PageNumbers > 1 && PageNumbers !== activePage) {
        handleClick(activePage);
        setActivePage(activePage -1)
       }
      }

  return (
    <div className='pagination flex items-center gap-3'>
        <button onClick={prevbtn}>Previous</button>
        <ul className='flex gap-5 items-center'>
           {
            PageNumbers.map((item)=>{
                return(
                    <li key={item} className={activePage === item? "active" : null}>
                        <a href="#" 
                        onClick={()=>{
                            handleClick(item)
                            pageNumber(item)
                        }}>
                            {item}
                        </a>
                    </li>
                )
            })
           }
        </ul>
        <button onClick={()=>{next(PageNumbers)}}>Next</button>
    </div>
  )
}
