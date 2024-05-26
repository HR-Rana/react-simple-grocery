import React from 'react'

export default function CheckoutForm() {
  return (
                <div>
                         <form action="" className='flex flex-col gap-5'>
                                <span>
                                    <input type="text" name="name" id="" placeholder='Customer Name' onChange={''} required />
                                </span>
                                <span>
                                    <input type="email" name="email" id="" placeholder='Customer Email' onChange={''}  />
                                </span>
                                <span>
                                    <input type="number" name="number" id="" placeholder='Customer Number' onChange={''} required />
                                </span>
                                <span className='flex gap-3 justify-between items-center'>
                                    <input type="text" name="Disctrict" id="" placeholder='Disctrict' onChange={''} />
                                    <input type="text" name="Sub-Disctrict" id="" placeholder='Sub-Disctrict' onChange={''} required />
                                </span>
                                <span className='flex justify-between gap-3'>
                                    <input type="text" name="homeTown" id="" placeholder='Home Town' onChange={''} required/>
                                {/* </span>
                                <span> */}
                                    <input type="text" name="ZipCode" id="" placeholder='Zip code' onChange={''} />
                                </span><span>
                                    <input type="text" name="RoadInfo" id="" placeholder='Road Infomation' onChange={''} />
                                </span>
                            </form>
                        </div>
  )
}
