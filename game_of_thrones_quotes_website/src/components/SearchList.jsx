import React from 'react'
import { useState } from 'react'
import ModalPopUp from './ModalPopUp';



const SearchList = ({listResults}) => {

    const [popUp, setPopUp] = useState(false);
    const [FamilyClicked , setFamilyClicked] = useState("")

    const close = () => setPopUp(false)
    const open = () => setPopUp(true)
  


    

    return (
        <div className={`w-[100%] bg-gray-100 flex flex-col border-0 
            shadow-black mt-[0.5rem]  border-transparent rounded-[0.3rem]
            ${listResults.length === 0 ? 'hidden' : ''} ${ listResults.length > '5' ? 'max-h-[10rem] overflow-y-scroll' : ''}`}>
                {listResults.map((line, index)=>{
                return(
                        <div key={Math.random()} className='px-[1rem] py-[0.5rem] rounded-[0.3rem]
                          hover:bg-gray-300 font-poppins cursor-pointer ' 
                            onClick={(e) =>{
                                popUp ? close() : open() 
                                setFamilyClicked(line)
                            }}>
                                {line.name}
                                {FamilyClicked && popUp && <ModalPopUp  handleClose={close} familyClicked = {FamilyClicked}/>}

                        </div>
                        
                    )
                })
            }

        </div>
  )
}

export default SearchList