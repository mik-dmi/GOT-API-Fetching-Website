
import styles, { layout } from "../style";
import { useState } from 'react';
import SearchBar from './SearchBar';
import { jonSnow } from '../assets';
import ModalPopUpPersons from './ModalPopUpPersons';


const Persons = () => {
 
    const [personResults ,setPersonResults] = useState([])

    const fetchData = (value) => {
      fetch("https://api.gameofthronesquotes.xyz/v1/characters")
      .then((res) => res.json())
      .then((data)=>{
        const nameList = data.map((character, index) => {
          const characterName = character && character.name;
          const houseName = character && character.house && character.house.name;
          const characterQuotes = character && character.quotes
          const slugCharacter = character && character.slug
          
          return [`${characterName || 'Unknown Character'} (${houseName || 'No house'})`, `${characterQuotes || 'No quotes'}`, `${slugCharacter || 'No slug'}`];
        });
        const results = nameList.filter((user) =>{
        return value && user[0] && user[0] && user[0].toLowerCase().includes(value) 
        });
 
        setPersonResults(results)
      })
      .catch(err => console.log(err))
    }
   

      
    return(
  
      <section id="person" className={` ${layout.sectionReverse} ${styles.paddingX} items-center`}>
        <div className={layout.sectionImg}>
          <img src={jonSnow} alt="Jon Snow " className="max-w-[80%] max-h-[80%]  shadow-lg rounded-[0.3rem] " />
        </div>
        <div className={`flex-1  flex justify-start items-start flex-col pt-[1.5rem] gap-[1rem] sm:self-baseline sm:min-h-[400px] min-h-[300px]`}>
          <h3 className={`${styles.heading3}  `}>
            Game of Thrones Persons   
          </h3> 
          <SearchBar fetchFunction = {fetchData} updatedList = {personResults} ModalType={ModalPopUpPersons}  />
       
        </div>
    </section>
  )
}

export default Persons



