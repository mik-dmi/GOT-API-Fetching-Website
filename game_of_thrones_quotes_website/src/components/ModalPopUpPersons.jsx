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
            className = ' w-fit bg-dimWhite  max-w-[90%] m-auto p-[1rem] max-h-[80%] rounded-[1rem] flex flex-col items-center overflow-y-scroll'
            key={crypto.randomUUID()}
            variants = {dropIn}
            initial = "hidden"
            animate = "visible"
            exit="exit"

        >

            <span className={`font-poppins md:text-[3rem] sm:text-[2rem] text-[1.5rem] font-[500] pb-[0.5rem]`} >
                {familyClicked[0]}
            </span>  
            <div className="flex flex-col">
                {sentencesArray.map((sentence, index) => (
                    <React.Fragment key={sentence.substring(0, 5)}>
                    <span className="font-ephesis md:text-[3rem] sm:text-[2rem] text-[1.5rem] mb-[2rem]  md:leading-[3.5rem] sm:leading-[2rem] leading-[1.5rem] ">
                    {index === sentencesArray.length -1 ? `" ${sentence.trim()}"` : `"${sentence.trim()}."`}
                        
                    </span>
                    </React.Fragment>
                    )
                )}
            </div>
                
                <div className="flex flex-col">
                    <Button runFunction={fetchData} textButton={'More Quotes'} styleButton={' mt-[0.5rem] px-[2rem] hover:bg-cyan-500 py-[0.5rem] bg-cyan-300'} />
                    <button className='mt-[0.5rem] font-poppins font-[600] text-red-600 py-[0.2rem] px-[2rem]
                    rounded-[1rem] hover:bg-slate-300' onClick={handleClose}> Close </button>
                </div>

        </motion.div>
            



    </ModalBackDrop>
  )
}
export default ModalPopUpPersons