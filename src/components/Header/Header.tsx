import React from 'react'
import './Header.scss'
import SearchBar from '../SearchBar/SearchBar';
interface HeaderProps {
    selectedOption: string;
  }
const Header = (props:HeaderProps) => {
    return (
        <>
            <div className='header_container'>
                <div className='logo'>
                    <img src='./images/FEV_logo.png' alt='FEV logo' />
                </div>
                {/* <div className='sign_in'>
                       <h3>SIGN IN</h3>
                       <h3>SIGN UP</h3>
                </div> */}
{/*                 
                <div className='logout'>
                <h3>Sign Out</h3>
                    <i className='las la-sign-out-alt'></i>
                   
                </div> */}
                <h3><span>|  </span>{props.selectedOption}</h3>
                <SearchBar/>
            </div>
        </>
    )
}

export default Header;