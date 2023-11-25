import React, { useEffect } from 'react'
import styles, { layout } from "../style";
import Button from "./Button";
import { useState } from 'react';
import SearchBar from './SearchBar';




const Houses = () =>{

  const [house, setHouse] = useState([])

  useEffect(()=>{
    fetch("https://api.gameofthronesquotes.xyz/v1/houses")
    .then((res) => res.json())
    .then((data)=>{ setHouse(data)})
    .catch(err => console.log(err))
  },[])
  

  
  return(

    <section id="house" className={` ${layout.section} items-center`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        First time diving   
      </h2> 
      {/*<ul className={` max-w-[800px] text-[black]`}>
          {house.map((list, index)=>(
            <li key={index}>{list?.name}</li>
          ) )}
          </ul>*/}
      <SearchBar />
      <Button />
    </div>
    <div className={layout.sectionImg}>
      {/*<img src={FirstTime} alt="Diving Courses" className="max-w-[90%] max-h-[90%]  shadow-lg " />*/}
    </div>



  </section>
  )
}


export default Houses