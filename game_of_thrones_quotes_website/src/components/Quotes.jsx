
import styles, { layout } from "../style";
import { useState } from 'react';
import Button from './Button'
import ModalPopUpQuotes from './ModalPopUpQuotes'

const Quotes = () => {

  const [popUp, setPopUp] = useState(false);
  const [quoteClicked, setQuoteClicked] = useState([]);

  

  const close = () => {
    console.log('Closing modal');
    setPopUp(false);
  };
  const open = (info) => {
    setPopUp((prevPopUp) => {
      if (!prevPopUp) {
        setQuoteClicked(info);  /*saves the house and the members in the familyClicked so it is send to the ModalPopUp*/
        console.log(`Infoo${info[0]}` )
        return true;
      }
      return false;
    });
  };


   
  const [quotesResults ,setQuotesResults] = useState([["All this horror that has come to my family, it's all because I couldn't love a motherless child.","Catelyn Stark","House Stark of Winterfell"],[
  "When you play the game of thrones, you win or you die. There is no middle ground.","Cersei Lannister","House Lannister of Casterly Rock"],[
  "The only way to keep your people loyal is to make certain they fear you more than they do the enemy.","Cersei Lannister","House Lannister of Casterly Rock"],[
   "If you think this has a happy ending, you haven't been paying attention.","Ramsay Bolton","House Bolton of the Dreadfort"],[ "It's better to be cruel than weak.","Theon Greyjoy","House Greyjoy of Pyke"]])

  const fetchData = (value) => {
    fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
    .then((res) => res.json())
    .then((data)=>{
      const results = data.map((quote, index) => {
        return [quote.sentence, quote.character.name, quote.character.house.name]
      });
      setQuotesResults(results)
    })
    .catch(err => console.log(err))
  }

  return (
    <section id="quote" className={`flex flex-col ${styles.boxWidth} ${styles.paddingY} ${styles.paddingX} items-center`}>
      <h3 className={`${styles.heading3}  `}>
        Game of Thrones Quotes   
      </h3> 
      
      <div className="flex flex-col my-[1rem] min-h-[350px] justify-center self-start">
        {quotesResults.map((quote, index)=>(
          <span key={Math.random()} 
          className={`font-ephesis ${popUp ? '' : 'hover:cursor-pointer hover:scale-110'}  md:text-[2.5rem] text-[1.5rem] mb-[0.3rem] first-letter:ml-[0.5rem]`}
          onClick={() => {
            popUp ? close() : open(quotesResults[index]);
          }}
          >
            "{quote[0]}"
            { quoteClicked[0] === quote[0] && popUp && <ModalPopUpQuotes handleClose={close} familyClicked={quoteClicked} />}
          </span>
        ))}
      </div>
      <Button runFunction={fetchData} textButton={'Change Quotes'} styleButton={'px-[2rem] py-[0.5rem] bg-cyan-300'}/>
     
      
    </section>
  )
}

export default Quotes