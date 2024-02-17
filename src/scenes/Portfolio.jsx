import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HText from "../components/HText";

import {motion} from 'framer-motion';

import { Navigation, Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import {RxArrowTopRight} from 'react-icons/rx'

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
                500:{
                slidesPerView:1,
                spaceBetween:15
                },
                768:{
                slidesPerView:2,
                spaceBetween:10
                },
                1060:{
                slidesPerView: 3,
                spaceBetween: 15
                }
            }}
            modules={[Navigation, Pagination, A11y]}

            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="w-full"
            >
                {ServiceData.map((item) => (
                <SwiperSlide key={item.title}>
                    <div className="flex flex-col  gap-6 my-20 mx-auto  group relative shadow-lg rounded-xl px-6 py-8 w-[300px] h-[284px] md:h-[284px] md:w-[310px] overflow-hidden cursor-pointer">
                    <div
                    className={`absolute inset-0 w-full h-full bg-cover bg-center`}
                    >
                        <img src={item.bImage} alt="" className="w-full h-full"/>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                    <div className="relative flex flex-col gap-3">
                        <item.icon className="opacity-0 text-blue-50 group-hover:opacity-100 w-[32px] h-[32px]"/>
                        <h1 className="opacity-0 group-hover:opacity-100 text-xl lg:text-2xl">{item.title}</h1>
                        <p className="opacity-0 group-hover:opacity-100 lg:text-[18px]">{item.content}</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-50 group-hover:rotate-45 duration-100"/>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </motion.div>
    </section>
  )
}

export default Portfolio