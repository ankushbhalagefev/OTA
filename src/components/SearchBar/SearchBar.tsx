import React from 'react'
import './SearchBar.scss'
const SearchBar = () => {
  return (
    <div className='search_bar'>
    <i className="las la-search"></i><input placeholder='Search ECU' type='search' />
</div>
  )
}

export default SearchBar;