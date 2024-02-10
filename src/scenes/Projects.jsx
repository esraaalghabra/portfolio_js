import HText from "../components/HText";
import {motion} from 'framer-motion';
import cover1 from '../assets/cover 1.png'
import cover2 from '../assets/cover 2.png'
import cover3 from '../assets/cover 3.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from "../shared/data";

export const ItemProject = ({image}) => {
    return(
        <div className="rounded-lg p-5 flex justify-center items-center">
            <AnchorLink
            className="transition duration-500 hover:scale-125"
            href="#">
            <img src={image} alt={image} className="w-[400px] md:h-[284px]"/>
            </AnchorLink>
        </div>
    )
}

const Projects = ({setSelectedPage}) => {
    const myProjects = [
            cover1,cover2,cover3,
            cover1,cover2,cover3
    ]
return (
    <section
    id="projects"
    className="py-20 md:h-full md:py-32"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        className="flex flex-col items-center justify-center">
            <motion.dev
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.2, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
            }}
            className='relative flex items-center justify-center '
            >
                <HText text={"Projects"}/>
            </motion.dev>
            <div className="container mx-auto pt-32 grid grid-flow-row lg:grid-cols-3 gap-10 w-full grid-cols-1 md:grid-cols-2">
            {myProjects.map((item, index) => (
            <ItemProject
            image={item}
            />
        ))}
            </div>
        </motion.div>
    </section>
)
}

export default Projects

