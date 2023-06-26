import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import EditProfile from '../EditProfile/EditProfile';

interface SidebarProps {
    onOptionSelect: (selectedOption: string) => void;
  }
const Sidebar = (props:SidebarProps) => {
    const[popup,setPopup]=useState(false);
    const handleOptionClick = (option: string) => {
        props.onOptionSelect(option);
      };
    return (
        <div className='sidebar_container'>
            <div className='profile'>
                <img src='./images/Profile.png' alt='Profile Photo' />
                <h4>Peter Mishra <span className='las la-pen' onClick={(e)=>{e.preventDefault();setPopup(true);}}></span></h4>
            </div>
            <ul>
                <li onClick={() => handleOptionClick('ECU Management')}><Link to='/ecumanagement'><i className="las la-microchip"></i><span>ECU Management</span></Link></li>
                <li onClick={() => handleOptionClick('Software Module')}><Link to='/softwaremodule'><i className="las la-sign-in-alt"></i><span>Software Module</span></Link></li>
                <li onClick={() => handleOptionClick('Deployment')}><Link to='/deployment'><i className="lab la-react"></i><span>Deployment</span></Link></li>
            </ul>
            {popup?<EditProfile trigger={popup} setTrigger={setPopup}/>:<></>}
        </div>
        
    )
}

export default Sidebar;