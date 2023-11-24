import React from 'react'
import {logo, menu} from '../assets'

const Navbar = () => {
  return (
    <nav className ="w-full flex py-[0.5rem] justify-between items-center navbar">
        <img src={logo} alt="GOT Quotes" className="w-[9rem] h-[3.0rem]"/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className='font-poppins font-normal cursor-pointer text-[1rem] text-white mr-10'>
                <a href="house">Houses</a>
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[1rem] text-white mr-10'>
                <a href="person">Person</a>
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[1rem] text-white mr-0'>
                <a href="qouse">Quote</a>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar