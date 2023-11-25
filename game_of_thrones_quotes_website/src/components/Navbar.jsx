import React from 'react'
import {logo, menu} from '../assets'

const Navbar = () => {
  return (
    <nav className ="w-full flex py-[0.5rem] px-[1rem] justify-between items-center navbar">
        <img src={logo} alt="GOT Quotes" className="w-[12rem] h-[4.0rem]"/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className='font-poppins font-[500] cursor-pointer text-[1.5rem] text-shadow-md text-white mr-10'>
                <a href="home">Home</a>
            </li>
            <li className='font-poppins font-[500] cursor-pointer text-[1.5rem] text-shadow-md text-white mr-10'>
                <a href="house">Houses</a>
            </li>
            <li className='font-poppins font-[500] cursor-pointer text-[1.5rem] text-shadow-md text-white mr-10'>
                <a href="person">Person</a>
            </li>
            <li className='font-poppins font-[500] cursor-pointer  text-[1.5rem] text-shadow-md text-white mr-0'>
                <a href="qouse">Quote</a>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar