import React from 'react';
import {FaSearch} from "react-icons/fa"
import { useState } from 'react';
import SearchList from './SearchList';


const SearchBar = ({fetchFunction, updatedList, ModalType}) => {
    const [input, setInput] = useState([]);
    

    console.log(`list ___> ${updatedList}` )

    const handChange = (value) => {
        const lowercasedValue = value.toLowerCase();
        setInput(value);
        fetchFunction(lowercasedValue);
    }
    
    return (
        <div>
            <div className='flex bg-slate-300 w-[100%] rounded-[0.6rem] items-center px-[1rem] py-[0.3rem] gap-[0.5rem]'>
                <FaSearch id= "search-icon" className='text-[1.5rem] p-[0.1rem] text-cyan-900' />
                <input placeholder='Search..'  className='bg-transparent outline-none text-[1.5rem]'
                value = {input}
                onChange={e => handChange(e.target.value)}     
                />            
            </div>
            <SearchList  listResults={updatedList}   TypeOfModal={ModalType} /> 

        </div>
  )
}

export default SearchBar