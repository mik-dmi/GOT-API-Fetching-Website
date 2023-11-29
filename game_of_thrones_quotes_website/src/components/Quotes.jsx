
import styles, { layout } from "../style";
import { useState } from 'react';
import Button from './Button'

const Quotes = () => {

   
  const [quotesResults ,setQuotesResults] = useState(["All I ever wanted was to fight for a lord I believed in. But the good lords are dead and the rest are monsters.",
  "When you play the game of thrones, you win or you die. There is no middle ground.", 
  "The only way to keep your people loyal is to make certain they fear you more than they do the enemy.",
   "I have a lot of experience in losing.", "Winter is coming!" ])

  const fetchData = (value) => {
    fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
    .then((res) => res.json())
    .then((data)=>{
      const results = data.map((quote, index) => {
        return quote.sentence;
      });
      setQuotesResults(results)
    })
    .catch(err => console.log(err))
  }

  return (
    <section id="house" className={`flex flex-col ${styles.paddingY} ${styles.paddingX} items-center`}>
      <h3 className={`${styles.heading3}  `}>
        Game of Thrones Quotes   
      </h3> 
      
      <div className="flex flex-col my-[1rem] min-h-[350px] justify-center self-start">
        {quotesResults.map((quote, index)=>(
          <span key={Math.random()} className="font-poppins  text-[1.5rem] mb-[0.5rem] first-letter:ml-[0.5rem]">
            -{quotesResults[index]}
          </span>
        ))}
      </div>
      <Button runFunction={fetchData} textButton={'Change Quotes'} styleButton={'px-[2rem] py-[0.5rem] bg-cyan-300'}/>
     

    </section>
  )
}

export default Quotes