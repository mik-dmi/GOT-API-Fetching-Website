import React, { useEffect } from 'react'
import styles, { layout } from "../style";
import Button from "./Button";
import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import { dragon_one } from '../assets';




const Houses = () =>{

  
  const [housesResults ,setHousesResults] = useState([])


  const fetchData = (value) => {
    fetch("https://api.gameofthronesquotes.xyz/v1/houses")
    .then((res) => res.json())
    .then((data)=>{
      const results = data.filter((user) =>{
      return value && user && user.name && user.name.toLowerCase().includes(value)
      });
      setHousesResults(results)
    })
    .catch(err => console.log(err))
  }
 
  

  
  return(

    <section id="house" className={` ${layout.section} items-center`}>
      <div className={`${layout.sectionInfo} gap-[1rem] self-baseline`}>
        <h3 className={`${styles.heading3}  `}>
          Game of Thrones Houses   
        </h3> 
        <SearchBar fetchFunction = {fetchData} updatedList = {housesResults}/>
        <Button />
      </div>
      <div className={layout.sectionImg}>
        <img src={dragon_one} alt="Dragon" className="max-w-[80%] max-h-[80%]  shadow-lg rounded-[0.3rem] " />
      </div>



  </section>
  )
}


export default Houses