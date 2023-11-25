import React from 'react';
import {FaSearch} from "react-icons/fa"

const SearchBar = () => {
  return (
    <div>
        <div className='flex bg-slate-300 w-[100%] rounded-[0.6rem] items-center px-[1rem] py-[0.3rem] gap-[0.5rem]'>
            <FaSearch id= "search-icon" className='text-[1.5rem] p-[0.1rem]' />
            <input placeholder='Search..'  className='bg-transparent outline-none text-[1.5rem]'/>     
        </div>

    </div>
  )
}

export default SearchBar