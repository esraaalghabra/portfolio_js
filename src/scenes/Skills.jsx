import { motion } from "framer-motion";
import { ProgressBar } from "../components/Progressbar";
import HText from "../components/HText";
import { SelectedPage } from "../shared/data";



const Skills = ({setSelectedPage}) => {
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
        name:"html",
        completed:70
    },
    {
        name:"css",
        completed:90
    },
    {
        name:"js",
        completed:95
    },

];

return(
    <section
    id="skills"
    className="py-20 md:h-full md:py-32"
    >
        <motion.div
        className="flex flex-col items-center justify-center"
        >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}

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
        <div
        className="mx-auto my-20 w-5/6 grid md:grid-cols-2 gap-20">
            {skills.map((skill) => <ProgressBar skill={skill.name} completed={skill.completed}/>)}
        </div>
        </motion.div>
    </section>
)
}

export default Skills