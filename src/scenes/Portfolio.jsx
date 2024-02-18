import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HText from "../components/HText";

import {motion} from 'framer-motion';
import Behance from '../assets/Behance.svg'
import { Navigation, Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { SelectedPage, ServiceData } from "../shared/data";


const Portfolio = ({setSelectedPage}) => {
return (
    <section
    id="projects"
    className="py-20 md:h-full md:py-32"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        className="flex flex-col items-center justify-center">
            <motion.div
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
                <HText text={"Portfolio"}/>
            </motion.div>
            
            <Swiper 
            breakpoints={{
                324:{
                slidesPerView:1,
                spaceBetween:10
                },
                768:{
                slidesPerView:2,
                spaceBetween:10
                },
                1060:{
                slidesPerView:2,
                spaceBetween:10
                },
                1200:{
                slidesPerView: 3,
                spaceBetween: 10
                }
            }}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="w-[80%] relative"
            >
                {ServiceData.map((item) => (
                <SwiperSlide>
                <div className="flex flex-col  gap-6 group relative items-center justify-center
                my-20 mx-auto shadow-lg rounded-xl px-6 py-8
                w-[250px] h-[200px]
                ss:w-[300px] ss:h-[250px]
                md:w-[370px] md:h-[250px] 
                lg:w-[300px] lg:h-[200px] 
                xl:w-[350px] xl:h-[250px] 
                overflow-hidden cursor-pointer">
                <div
                className={`absolute inset-0 w-full h-full bg-cover bg-center`}
                >
                    <img src={item.bImage} alt={item.bImage} className="w-full h-full"/>
                </div>
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-10"/>
                <a
                    className="absolute bottom-5 left-5 w-[35px] h-[35px] opacity-0 group-hover:opacity-100 duration-100"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img alt="Behance-link" src={Behance} className='w-[50px] h-[50px] opacity-50 hover:opacity-100'/>
                </a>
                </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </motion.div>
    </section>
    )
}

export default Portfolio