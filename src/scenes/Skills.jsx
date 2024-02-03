import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Skills = ({setSelectedPage}) => {
const isDesktop = useMediaQuery("(min-width: 1200px)");

return (
    <section
    id='skills'
    className='py-10 md:h-full md:pb-0'
    >
        <div className='relative flex items-center justify-center mt-32 '>
        <h1 className='relative font-poppins text-[50px]'>Skills</h1>
        {(isDesktop && (
        <motion.h4
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay: 0.2, duration: 0.3 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 0.3, x: 0 },
        }}
        className="font-tourney text-[100px] z-0 text-blue absolute opacity-[0.1] leading-relaxed tracking-wider max-w-[1100px] ">
            Skills
        </motion.h4>
        ))}
        </div>
    </section>
)
}

export default Skills