import React from 'react'
import { useState } from 'react'
import ModalPopUpHouses from './ModalPopUpHouses';



const SearchList = ({ listResults , TypeOfModal}) => {
    const [popUp, setPopUp] = useState(false);
    const [familyClicked, setFamilyClicked] = useState([]);

    

    const close = () => setPopUp(false);
    const open = (line) => {
      setPopUp((prevPopUp) => {
        if (!prevPopUp) {
          setFamilyClicked(line);  /*saves the house and the members in the familyClicked so it is send to the ModalPopUp*/
          console.log(`${line[0]}` )
          return true;
        }
        return false;
      });
    };
  
    return (
      <div className={`w-[100%] bg-gray-100 flex flex-col border-0 
          shadow-black mt-[0.5rem]  border-transparent rounded-[0.3rem]
          ${listResults.length === 0 ? 'hidden' : ''} ${listResults.length > '5' ? 'max-h-[10rem] overflow-y-scroll' : ''}`}>
{/*HouseNameAndMembers has the houseName in position [0]  and list of members in position [1]  */}       
        {
        listResults.map((HouseNameAndMembers, index) => (  
          <div
            key={Math.random()}
            className={`px-[1rem] py-[0.5rem] rounded-[0.3rem]
              font-poppins cursor-pointer ${popUp ? '' :'hover:bg-gray-300' }`}
            onClick={() => {
              popUp ? close() : open(HouseNameAndMembers);
            }}
          > 
            {HouseNameAndMembers[0]}
            {familyClicked && popUp && <TypeOfModal handleClose={close} familyClicked={familyClicked} />}
          </div>
        ))}
      </div>
    );
  };
  
  export default SearchList;
  