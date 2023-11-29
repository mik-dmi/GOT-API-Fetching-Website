import { useState } from 'react'
import {logo, menu , close} from '../assets'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
  return (
    <nav className ="w-full flex py-[0.5rem] px-[1rem] justify-between items-center navbar">
        <img src={logo} alt="GOT Quotes" className="w-[12rem] h-[4.0rem]"/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className='font-poppins font-[500] cursor-pointer text-[1.5rem] text-shadow-md text-white mr-10'>
                <a href="#house">Houses</a>
            </li>
            <li className='font-poppins font-[500] cursor-pointer text-[1.5rem] text-shadow-md text-white mr-10'>
                <a href="#person">Person</a>
            </li>
            <li className='font-poppins font-[500] cursor-pointer  text-[1.5rem] text-shadow-md text-white mr-0'>
                <a href="#quote">Quote</a>
            </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu }
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain"
            onClick={() => setToggle((prev)=> !prev)} />
            <div 
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-orange-900/[0.9] 
            absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex-col  justify-end items-center flex-1'>
                    <li className='font-poppins font-[500] cursor-pointer text-[1.5rem] text-shadow-md text-white mr-10'>
                        <a href="#house">Houses</a>
                    </li>
                    <li className='font-poppins font-[500] cursor-pointer text-[1.5rem] text-shadow-md text-white mr-10'>
                        <a href="#person">Person</a>
                    </li>
                    <li className='font-poppins font-[500] cursor-pointer  text-[1.5rem] text-shadow-md text-white mr-0'>
                        <a href="#quote">Quote</a>
                    </li>
                </ul>
                
            </div>

      </div>



    </nav>
  )
}

export default Navbar