import React from 'react'
import { useState } from 'react'
import ModalPopUp from './ModalPopUp';



const SearchList = ({ listResults }) => {
    const [popUp, setPopUp] = useState(false);
    const [familyClicked, setFamilyClicked] = useState("");
  
    const close = () => setPopUp(false);
    const open = (line) => {
      setPopUp((prevPopUp) => {
        if (!prevPopUp) {
          setFamilyClicked(line);
          return true;
        }
        return false;
      });
    };
  
    return (
      <div className={`w-[100%] bg-gray-100 flex flex-col border-0 
          shadow-black mt-[0.5rem]  border-transparent rounded-[0.3rem]
          ${listResults.length === 0 ? 'hidden' : ''} ${listResults.length > '5' ? 'max-h-[10rem] overflow-y-scroll' : ''}`}>
        {listResults.map((line, index) => (
          <div
            key={Math.random()}
            className={`px-[1rem] py-[0.5rem] rounded-[0.3rem]
              font-poppins cursor-pointer ${popUp ? '' :'hover:bg-gray-300' }`}
            onClick={() => {
              popUp ? close() : open(line);
            }}
          > 
            {line.name}
            {familyClicked && popUp && <ModalPopUp handleClose={close} familyClicked={familyClicked} />}
          </div>
        ))}
      </div>
    );
  };
  
  export default SearchList;
  