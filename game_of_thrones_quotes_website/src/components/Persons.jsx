
import styles, { layout } from "../style";
import { useState } from 'react';
import SearchBar from './SearchBar';
import { jonSnow } from '../assets';
import ModalPopUpPersons from './ModalPopUpPersons';


const Persons = () => {
 
    const [housesResults ,setHousesResults] = useState([])

    const fetchData = (value) => {
      fetch("https://api.gameofthronesquotes.xyz/v1/characters")
      .then((res) => res.json())
      .then((data)=>{
        const nameList = data.map((character, index) => {
          const characterName = character && character.name;
          const houseName = character && character.house && character.house.name;
          const characterQuotes = character && character.quotes
          return [`${characterName || 'Unknown Character'} (${houseName || 'No house'})`, `${characterQuotes || 'No quotes'}`];
        });
        const results = nameList.filter((user) =>{
        return value && user[0] && user[0] && user[0].toLowerCase().includes(value)
        });
 
        setHousesResults(results)
      })
      .catch(err => console.log(err))
    }
   

      
    return(
  
      <section id="house" className={` ${layout.section} items-center`}>
        <div className={layout.sectionImg}>
          <img src={jonSnow} alt="Jon Snow " className="max-w-[80%] max-h-[80%]  shadow-lg rounded-[0.3rem] " />
        </div>
        <div className={`${layout.sectionInfo} gap-[1rem] self-baseline`}>
          <h3 className={`${styles.heading3}  `}>
            Game of Thrones Persons   
          </h3> 
          <SearchBar fetchFunction = {fetchData} updatedList = {housesResults} ModalType={ModalPopUpPersons}  />
       
        </div>
    </section>
  )
}

export default Persons









  

  


