import React from 'react'
import styles from './style'
import { Navbar, Hero, Houses, Persons, Quotes } from './components'


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.boxWidth}`} >
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Houses /> 
          <Persons />
          <Quotes />
        </div>
      </div>
    </div>
  )
}

export default App