import React from 'react'
import {motion} from 'framer-motion';
import { SelectedPage } from '../shared/data';
import HText from '../components/HText';
const Contact = ({setSelctedPage}) => {
return (
    <section
    id='contact'
    className="py-20 md:h-full md:py-32"
    >
        <motion.div
        onViewportEnter={() => setSelctedPage(SelectedPage.Contact)}
        className="flex flex-col items-center justify-center"
        >
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
                <HText text={"Contact"}/>
            </motion.dev>
        </motion.div>
    </section>
)
}

export default Contact