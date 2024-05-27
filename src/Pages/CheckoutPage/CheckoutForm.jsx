import React from 'react'

export default function CheckoutForm() {
  return (
                <div>
                         <form action="" className='flex flex-col gap-5'>
                                <span>
                                    <p>Name of Customer<sup>*</sup></p>
                                    <input type="text" name="name" id="" placeholder='Customer Name' onChange={''} required />
                                </span>
                                <span>
                                    <p>Customer Email <sup>*</sup></p>
                                    <input type="email" name="email" id="" placeholder='Customer Email' onChange={''}  />
                                </span>
                                <span>
                                    <p>Customer Phone<span>*</span></p>
                                    <input type="number" name="number" id="" placeholder='Customer Number' onChange={''} required />
                                </span>
                                <span className='flex gap-3 justify-between items-center'>
                                   <span>
                                        <p>District</p>
                                        <input type="text" name="Disctrict" id="" placeholder='Disctrict' onChange={''} />
                                   </span>
                                    <span>
                                        <p>Upzila</p>
                                        <input type="text" name="Sub-Disctrict" id="" placeholder='Sub-Disctrict' onChange={''} required />
                                    </span>
                                </span>
                                <span className='flex justify-between gap-3'>
                                    <span>
                                        <p>Home Area</p>
                                        <input type="text" name="homeTown" id="" placeholder='Home Town' onChange={''} required/>
                                    </span>
                                {/* </span>
                                <span> */}
                                   <span>
                                    <p>Zip Code</p>
                                     <input type="text" name="ZipCode" id="" placeholder='Zip code' onChange={''} />
                                   </span>
                                </span><span>
                                    <p>Road Name / No</p>
                                    <input type="text" name="RoadInfo" id="" placeholder='Road Infomation' onChange={''} />
                                </span>
                            </form>
                        </div>
  )
}
