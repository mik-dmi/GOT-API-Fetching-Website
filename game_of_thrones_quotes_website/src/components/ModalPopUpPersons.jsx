import {motion} from "framer-motion"
import ModalBackDrop from './ModalBackDrop'

const ModalPopUpPersons = ({handleClose, familyClicked }) => {
  
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
    console.log(`${familyClicked[1]}` )
    const sentences = familyClicked[1].split('.,');  /*seperating the senteces and putting in an array */
    
  
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
        <span className={`font-ephesis text-[2rem] font-[500] pb-[0.5rem]`} >
            {familyClicked[0]}
        </span>  
        <div className="flex flex-col">
            {sentences.map((sentence, index) => (
                <span className={`font-poppins text-[1.5rem] font-[200]
                 text-left pb-0.5rem first-letter:pl-[1rem]`} key={index}>
                {index === sentences.length -1 ? `- ${sentence}` : `- ${sentence}.`}
                    
                </span>
            ))}
        </div>
            <button className='mt-[2rem] font-poppins font-[600] text-red-600 py-[0.2rem] px-[2rem]
            rounded-[1rem] hover:bg-slate-300' onClick={handleClose}> Close </button>


        </motion.div>



    </ModalBackDrop>
  )
}
export default ModalPopUpPersons