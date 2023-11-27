import React from 'react'
import {motion} from "framer-motion"

const ModalBackDrop = ({children, onClick}) => {
  return (
    <motion.div
        className='fixed overflow-none top-0   left-0 h-[100%] w-[100%] bg-gray-400/[0.2]  flex items-center justify-center '
        onClick = {onClick}
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        exit={{opacity:0}}
        

    >
        {children}


    </motion.div>
  )
}

export default ModalBackDrop