import React from 'react'
import {motion} from "framer-motion"
import { AnimatePresence } from 'framer-motion';

const ModalBackDrop = ({children, onClick}) => {
  return (
    <AnimatePresence>
    <motion.div
        className='fixed overflow-none top-0   left-0 h-[100%] w-[100%] bg-gray-400/[0.8]  flex items-center justify-center '
        onClick = {onClick}
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        exit={{opacity:0}}
        key={crypto.randomUUID()}
        

    >
        {children}


    </motion.div>
    </AnimatePresence>
  )
}

export default ModalBackDrop