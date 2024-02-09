import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Slider from "../components/Slider";
import Progressbar, { ProgressBar } from "../components/Progressbar";
import HText from "../components/HText";

const Skills = ({setSelectedPage}) => {
const isDesktop = useMediaQuery("(min-width: 1200px)");
const skills = [
    {
        name:"html",
        completed:20
    },
    {
        name:"css",
        completed:40
    },
    {
        name:"js",
        completed:50
    },
    {
        name:"dart",
        completed:60
    },
    {
        name:"dart",
        completed:70
    },
    {
        name:"php",
        completed:90
    },
    {
        name:"php",
        completed:90
    },
    {
        name:"php",
        completed:90
    },
]
return (
    <section
    id='skills'
    className='py-10 md:h-full md:py-32'
    >
        <div className="flex flex-col items-center justify-center">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay: 0.2, duration: 0.5 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        }}
        className='relative flex items-center justify-center'>
        <HText text={"Skills"}/>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay: 0.4,duration: 0.3 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        }}
        className="mx-auto my-20 w-5/6 grid md:grid-cols-2 gap-20">
            {skills.map((skill) => <ProgressBar skill={skill.name} completed={skill.completed}/>)}
        </motion.div>
        </div>
    </section>
)
}

export default Skills