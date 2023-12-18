import React from 'react'
import styles, { layout } from "../style";

import { useState } from 'react';
import SearchBar from './SearchBar';

import { dragon_one } from '../assets';
import ModalPopUpHouses from './ModalPopUpHouses';




const Houses = () =>{

  
  const [housesResults ,setHousesResults] = useState([])
  


  const fetchData = (value) => {
    fetch("https://api.gameofthronesquotes.xyz/v1/houses")
    .then((res) => res.json())
    .then((data)=>{
      
      
      const characterNames =  data.map((character, index) => {
        return [character.name , character.members]
      })
      console.log(characterNames)
      const results = characterNames.filter((user) =>{
      return value && user[0] && user[0] && user[0].toLowerCase().includes(value)
      });

      setHousesResults(results)  /*[name , members]*/
     
    })
    .catch(err => console.log(err))

  }
  console.log("houuuuses")
  console.log(housesResults)

  
  return(

    <section id="house" className={`${styles.boxWidth} ${layout.section} ${styles.paddingX} items-center`}>
      <div className={`flex-1  flex justify-start items-start flex-col pt-[1.5rem] gap-[1rem] sm:self-center self-baseline sm:min-h-[400px] min-h-[300px] `}>
        <h3 className={`${styles.heading3}  flex flex-col `}>
          Explore Houses: 
          <span className={`${styles.heading4}  italic`}>Click to view  the house members</span> 
        </h3> 

        <SearchBar fetchFunction = {fetchData} updatedList = {housesResults}  ModalType={ModalPopUpHouses} placeHolder={"Search a house name"} />
        
      </div>
      <div className={layout.sectionImg}>
        <img src={dragon_one} alt="Dragon" className="max-w-[80%] max-h-[80%]  shadow-lg rounded-[0.3rem] " />
      </div>



  </section>
  )
}


export default Houses