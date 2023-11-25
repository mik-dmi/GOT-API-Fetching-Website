import React from 'react'
import styles from '../style'

const Hero = () =>  (
    <section id="home" className={`flex sm:flex-row flex-col sm:justify-center justify-start sm:items-start items-center h-[100%] sm:mt-[7rem] mt-[5rem]`}> 
        <div className='flex flex-col sm:items-start items-center'>
            <h1 className={`${styles.heading2} sm:max-w-[37rem] max-w-[25rem] sm:text-left text-center text-shadow-md`}>Best Quotes From Game Of Thrones</h1>
            <p className={`${styles.paragraph} sm:max-w-[25rem] max-w-[20rem] sm:text-left text-center text-shadow-md`}>Learn all the best quotes from your favorite Game of Thrones characters</p>

        </div>



    </section>
  )


export default Hero
