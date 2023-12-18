const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold sm:text-[4rem] text-[2.5rem] xs:text-[2.5rem] text-[1rem]  text-white sm:leading-[4.5rem] leading-[3rem]",
    paragraph: "font-poppins sm:py-[1rem] py-0 font-[500] text-white sm:text-[1.5rem] text-1   xs:text-[1rem]  leading-[1.5rem] whitespace-normal",
  
    heading3: "font-poppins font-semibold sm:text-[3rem] text-[2rem] xs:text-[2rem] text-[0.8rem]  text-gray-700 xs:leading-[3rem] leading-[60.8px]",
    heading4: "font-poppins font-medium sm:text-[1rem] text-[0.8rem] xs:text-[1rem] text-[0.5rem]  text-gray-600 xs:leading-[3rem] leading-[60.8px]",

    flexCenter: "flex justify-center items-center",  
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-10",
 

  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 `,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;