import { motion } from "framer-motion";
// import flutter from '../assets/FlutterDeveloperText.png'
import HomePageGraphic from "../assets/undraw_product_iteration_kjok 2.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Home = ({setSelctedPage}) => {
  // const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  return (
    <section
    id='home'
    className='gap-16 py-10 md:h-full md:pb-0'
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
      onViewportEnter={() => setSelctedPage("home")}
      className="relative md:flex items-center justify-between mx-auto mt-32 w-5/6">
      {
        (isDesktop && (
          <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay: 0.2, duration: 0.3 }}
          variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 0.03, x: 0 },
          }}
          className="font-tourney text-[100px] z-0 absolute left-[20rem] opacity-[0.1] leading-relaxed tracking-wider max-w-[1100px] "><span className="text-blue">SOFTWARE</span> ENGINEER</motion.h4>
        ))
      }
      {/* MAIN HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
          }}
        className="relative flex flex-col items-start p-5 md:ml-10 md:mr-10 gap-6">
          <div className="flex">
            <h1 className="font-playfair text-[40px] lg:text-[70px] ">
            Hello, I’m <br/> <span className="text-blue">Flutter</span> Developer
          </h1>
          {/* <img src={flutter} alt="flutter" className="z-[-1] md:z-0 absolute -right-[50%]"/> */}
          </div>
          <p className="text-base font-poppins max-w-[600px]">
            Passionate Flutter developer with expertise in crafting seamless mobile experiences. Proficient in Flutter and UI/UX design. Ready for any project
          </p>
          <AnchorLink
          className="mt-8">
            <button 
            onClick={() => setSelctedPage("contactus")}
            className="px-6 py-2 font-semibold text text-blue border-2 border-blue hover:shadow-md hover:shadow-blue transition duration-500">
              Lit’s Discuss
            </button>
          </AnchorLink>
        </motion.div>
        {/* IMAGE */}
        <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay: 0.5, duration: 0.3 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        }}
        src={HomePageGraphic} alt="hero image" className="relative opacity-[0.5]"/>
      </motion.div>














      
    {/* MAIN HEADER */}
    {/* <div className='md:flex m-auto w-5/6 md:h-5/6'>
    <div className="z-10 mt-[10rem] flex items-start justify-start w-[50%]">
      <motion.div
      initial= "hidden"
      whileInView="visable"
      viewport={{ once: true, amount: 0.5 }}
      transition={{duration: 0.5}}
      variants={{
        hidden: {opacity: 0.1, y: 50},
        visable: {opacity:1, y: 0}
      }}
      >
        <h1 className="font-playfair text-[70px]">
              Hello, I’m <br/> <span className="text-blue">Flutter</span> Developer
            </h1>
            <p className="mt-8">
            Passionate Flutter developer with expertise in crafting seamless mobile experiences. Proficient in Flutter and UI/UX design. Ready for any project
            </p>
      </motion.div>
    </div>
    </div> */}
    </section>



  )
}

export default Home