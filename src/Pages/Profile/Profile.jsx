import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaBars } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";






export default function ProfilePage() {


  return (
    <div className="user-dashboard">
        <Tabs className={"flex justify-between"}>
          <div className="left-sidebar w-[20%]">
            <TabList className={"flex flex-col"}>
              <Tab><li><span><FaShoppingBasket /> </span> <span>Profile</span></li></Tab>  
              <Tab><li><span><FaShoppingBasket /> </span> <span>Orders</span></li></Tab>  
              <Tab><li><span><FaHistory /> </span> <span>History</span></li></Tab> 
              <Tab><li><span><IoNotificationsCircle /></span> <span>Notifications</span></li></Tab>
              <Tab>
                 <li>
                    <Link to={"/"} onClick={()=>{window.reload();}} className='flex items-center gap-2'> <span><FaHome /></span><span>Home</span></Link>
                 </li>
              </Tab> 
              <Tab>
                 <li>
                 <RiLogoutCircleRLine /><span>Logout</span>
                 </li>
              </Tab>
            </TabList>
          </div>

          <div className="right-site-pages w-[80%]">
            <div className="header bg-gray-200 p-2 flex justify-between items-center">
              <span>
                 <FaBars className='cursor-pointer' />
              </span>
              <div>
                 <ul className='flex items-center gap-3 justify-between'>
                    <li>HR Rana</li>
                    <li><FaCircleUser /></li>
                 </ul>
              </div>
            </div>
            <TabPanel>
              <h2>Profile page</h2>
            </TabPanel> 
            <TabPanel>
              <h2>Order page</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </div>
      </Tabs>
    </div>
  )
}




