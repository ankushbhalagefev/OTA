import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import EditProfile from '../EditProfile/EditProfile';
const Sidebar2 = () => {
    const[popup,setPopup]=useState(false);
    
    return (
        <div className='sidebar_container'>
            <div className='logo'>
            <img src='./images/FEV_logo.png' alt='FEV logo' />
            </div>
            <div className='profile'>
                <img src='./images/Profile.png' alt='Profile Photo' />
                <h4>Peter Mishra <span className='las la-pen' onClick={(e)=>{e.preventDefault();setPopup(true);}}></span></h4>
            </div>
            <ul>
                <li><Link to='/ecumanagement'><i className="las la-microchip"></i><span>ECU Management</span></Link></li>
                <li><Link to='/softwaremodule'><i className="las la-sign-in-alt"></i><span>Software Module</span></Link></li>
                <li><Link to='/deployment'><i className="lab la-react"></i><span>Deployment</span></Link></li>
            </ul>
            {popup?<EditProfile trigger={popup} setTrigger={setPopup}/>:<></>}
        </div>
        
    )
}

export default Sidebar2;