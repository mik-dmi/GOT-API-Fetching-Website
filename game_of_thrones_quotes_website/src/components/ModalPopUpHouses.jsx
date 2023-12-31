import React from 'react'
import {motion} from "framer-motion"
import ModalBackDrop from './ModalBackDrop'

const ModalPopUpHouses = ({handleClose, familyClicked }) => {
  
    const dropIn = {
        hidden:{
            y: '100vh',
            opacity: 0,
        },
        visible:{
            y:"0",
            opacity: 1,
            transition:{
                duration:0.3,
                damping: 25,
                stiffness:500,
            }
        },
        exit:{
            y:"100vh ",
            opacity: 0,
        }
    }
    console.log(`${familyClicked}` )
  
   return (
    <ModalBackDrop onClick = {handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className = 'w-fit bg-dimWhite  max-w-[90%] m-auto pt-[2rem] pb-[1rem] px-[5rem] max-h-[80%] rounded-[1rem] flex flex-col items-center '
            variants = {dropIn}
            initial = "hidden"  
            animate = "visible"
            exit="exit"
            key={crypto.randomUUID()}

        >
            {familyClicked[1].map((member, index) => (
                <span className={`font-poppins  xs:text-[2rem] text-[1.5rem] font-[500] text-center`} key={crypto.randomUUID()}>
                    {member.name}
                </span>
            ))}
            <button className='mt-[1rem] font-poppins font-[600] text-red-600 py-[0.2rem] px-[2rem]
            rounded-[1rem] hover:bg-slate-300' onClick={handleClose}> Close </button>


        </motion.div>



    </ModalBackDrop>
  )
}

export default ModalPopUpHouses