import React from 'react'
import {motion} from "framer-motion"
import ModalBackDrop from './ModalBackDrop'

const ModalPopUp = ({handleClose, familyClicked }) => {
  
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
    console.log(familyClicked)
  
   return (
    <ModalBackDrop onClick = {handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className = 'w-full  bg-dimWhite md:w-1/2 lg:w-1/2 xl:w-[90%] m-auto p-[1rem] rounded-[1rem] flex flex-col items-center'
            variants = {dropIn}
            initial = "hidden"
            animate = "visible"
            exit="exit"

        >
            {familyClicked.members.map((member, index) => (
                <span key={Math.random()}>{member.name}</span>
            ))}
            <button onClick={handleClose}> Close </button>


        </motion.div>



    </ModalBackDrop>
  )
}

export default ModalPopUp