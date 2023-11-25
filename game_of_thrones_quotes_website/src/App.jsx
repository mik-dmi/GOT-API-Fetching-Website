import React from 'react'
import styles from './style'
import { Navbar, Hero, Houses, Persons, Quotes } from './components'


const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`lg:px-16 px-0 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} sm:pr-[1rem] pr-[0.5rem] sm:pl-[1rem] pl-[0.5rem] h-[100vh] relative `}>
        <div
            className={`absolute inset-0 bg-hero bg-cover bg-center opacity-85`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-slate-500 opacity-40 " />
          <div className='relative h-[100%]'>
            <Navbar />
            <Hero />
          </div >
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexCenter} `} >
        <div className={`${styles.boxWidth} sm:pr-[2rem] pr-[1rem] sm:pl-[1rem] pl-[0.5rem] bg-primary`}>
          <Houses /> 
          <Persons />
          <Quotes />
        </div>
      </div>
    </div>
  )
}

export default App