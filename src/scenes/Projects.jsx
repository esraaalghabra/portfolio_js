import HText from "../components/HText";
import Skills from "./Skills";
import {motion} from 'framer-motion';
import cover1 from '../assets/cover 1.png'
import cover2 from '../assets/cover 2.png'
import cover3 from '../assets/cover 3.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const ItemProject = ({image}) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center`;
    return(
        <li className="relative mx-5 inline-block h-[380px] w-[450px] hover:scale-125 rounded-full">
            <AnchorLink
            className="transition duration-500 hover:text-primary-300"
            href="#">
            <img src={image} alt={image} />
            </AnchorLink>
        </li>
    )
}

const Projects = () => {
    const myProjects = [
            cover1,cover2,cover3,
            cover1,cover2,cover3
    ]
  return (
    <section
    id="projects"
    className="py-10 md:h-full md:py-32"
    >
        <div className="flex flex-col items-center justify-center">
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
            <div 
            className='mt-32 h-[400px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {myProjects.map((item, index) => (
                        <ItemProject
                        image={item}
                        />
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Projects