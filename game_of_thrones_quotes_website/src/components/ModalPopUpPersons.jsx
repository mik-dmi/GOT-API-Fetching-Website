import {motion, AnimatePresence} from "framer-motion"
import ModalBackDrop from './ModalBackDrop'
import Button from "./Button"
import { useState, useEffect } from 'react';
import React from "react";

const ModalPopUpPersons = ({handleClose, familyClicked}) => {
    
    const [personQuotesResults ,setPersonQuotesResults] = useState(familyClicked[1])
    const [sentencesArray, setSentencesArray] = useState([]);

    const fetchData = () => {
        fetch(`https://api.gameofthronesquotes.xyz/v1/author/${familyClicked[2]}/5`)
          .then((res) => res.json())
          .then((data) => {
            const results = data.map((quote, index) => {
              return quote.sentence;
            });
      
            console.log(`inside == ${results}`);
            const concatenatedQuotes = results.join(', '); // Convert array to string
            console.log(`inside == ${concatenatedQuotes}`);
            setPersonQuotesResults(concatenatedQuotes);
          })
          .catch((err) => console.log(err));
      };
    
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
  
    useEffect(() => {
    // Whenever personQuotesResults changes, update sentencesArray
    const newSentencesArray = personQuotesResults.split(/[.!?],/);
    setSentencesArray(newSentencesArray);
  }, [personQuotesResults]);

   return (
        <ModalBackDrop>
         <motion.div
            onClick={(e) => e.stopPropagation()}
            className = 'w-full  bg-dimWhite md:w-1/2 lg:w-1/2 xl:w-[90%] m-auto p-[1rem] rounded-[1rem] flex flex-col items-center'
            key={crypto.randomUUID()}
            variants = {dropIn}
            initial = "hidden"
            animate = "visible"
            exit="exit"

        >

            <span className={`font-ephesis text-[2rem] font-[500] pb-[0.5rem]`} >
                {familyClicked[0]}
            </span>  
            <div className="flex flex-col">
                {sentencesArray.map((sentence, index) => (
                    <React.Fragment key={sentence.substring(0, 5)}>
                    <span className="your-span-class">
                        {sentence.trim()} {/* Trim to remove leading/trailing spaces */}
                    </span>
                    </React.Fragment>
                    )
                )}
            </div>
                
                <div>
                    <Button runFunction={fetchData} textButton={'More Quotes'} styleButton={'px-[2rem] py-[0.5rem] bg-cyan-300'} />
                    <button className='mt-[2rem] font-poppins font-[600] text-red-600 py-[0.2rem] px-[2rem]
                    rounded-[1rem] hover:bg-slate-300' onClick={handleClose}> Close </button>
                </div>

        </motion.div>
            



    </ModalBackDrop>
  )
}
export default ModalPopUpPersons