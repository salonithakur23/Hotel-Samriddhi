import React, {  useState } from 'react'
import './Admin.css'
import { FaBars,FaBookReader, FaTh, FaBowlFood, } from 'react-icons/fa'
import {  AiOutlineOrderedList, AiOutlineProfile } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BiFoodTag } from "react-icons/bi";
import { MdOutlineMeetingRoom,MdRoomService ,MdOutlineControlPointDuplicate, MdOutlineCategory} from 'react-icons/md';
import { GrCircleInformation } from "react-icons/gr";
import { IoIosInformationCircle } from 'react-icons/io';

const MainAdminSidebar = ({children}) => {

    const [ isOpen, setIsOpen ] = useState(false);
  const toggle= () => setIsOpen (!isOpen );
  const menuItem = [
 
    {
      path: "/main-admin-dashboard",
      name: "Dashboard",
      icon: <FaTh />
    },

    {
      path: "/items",
      name: "Item ",
      icon: <BiFoodTag />
    },
    {
      path: "/add-category",
      name: "Item-Category ",
      icon: <MdOutlineCategory />
    },
    
    {
      path: "/add-rooms",
      name: "Rooms",
      icon: <MdOutlineMeetingRoom />
    },
    {
      path: "/room-category",
      name: "Room-Category",
      icon: <MdOutlineMeetingRoom />
    },
     
    {
        path: "/services",
        name: "Room Service",
        icon: <MdRoomService />
      },
    {
        path: "/employees",
        name: "Employees",
        icon: <FaBookReader />
      },
      {
        path: "/guest-list",
        name: "Guest Information",
        icon: <IoIosInformationCircle />
      },
    

]
  return (
    <>
    <div className="container-fluid  ">
      <div style={{width: isOpen ? "200px" : "50px", paddingTop:"20px"}} className='sidebar'>
        <div className='top_section'>
          <p style={{display: isOpen ? "block" : "none"}} className='logo'>
          <span>Main Admin</span>
          </p>
          <div style={{marginLeft: isOpen ? "20px" : "15px" ,paddingTop:"15px"}} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <Link to={item.path} key={index} className="link" 
            activeclassName="active">
              <div className='icon'> {item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}}  className='Link_text'>{item.name}</div>
            </Link>
          ))
        }
      </div>
      <main style={{width:"100%",height:"100vh",overflow:"scroll"}}>{children}</main>
    </div>
    
    
    
    </>
  )
}

export default MainAdminSidebar