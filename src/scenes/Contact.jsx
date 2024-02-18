import React from 'react'
import {motion} from 'framer-motion';
import { SelectedPage } from '../shared/data';
import HText from '../components/HText';
import { useForm } from 'react-hook-form';
import SocialMediaIcons from '../components/SocialMediaIcons';


const Contact = ({setSelctedPage}) => {

    const inputStyles = `my-3 w-full bg-black
    px-5 py-3 placeholder-white border-b-2 border-blue bg-slate-800 font-poppins`;
        const {
            register,
            trigger,
            formState: { errors },
        } = useForm();

        const onSubmit = async (e) => {
            const isValid = await trigger();
            if (!isValid) {
                e.preventDefault();
            }
        }
return (
    <section
    id='contact'
    className="py-20 md:h-full md:py-32"
    >
        <motion.div
        onViewportEnter={() => setSelctedPage(SelectedPage.Contact)}
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
                <HText text={"Contact Me"}/>
            </motion.dev>
            <div className='justify-between gap-8 pt-24 w-5/6 mx-auto md:flex'>
                <div className='flex flex-col basis-[40%]'>
                <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                    method="POST"
                >
                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="Full name"
                    {...register("name", {
                    required: true,
                    maxLength: 100,
                    })}
                />
                {errors.name && (
                    <p className="text-error text-sm">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                )}
                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="Email Address"
                    {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />
                {errors.email && (
                    <p className=" text-error text-sm">
                    {errors.email.type === "required" &&
                        "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                    </p>
                )}
                <textarea
                    className={inputStyles}
                    placeholder="Message"
                    rows={4}
                    cols={50}
                    {...register("message", {
                    required: true,
                    maxLength: 2000,
                    })}
                />
                {errors.message && (
                    <p className="text-error text-sm">
                    {errors.message.type === "required" &&
                        "This field is required."}
                    {errors.message.type === "maxLength" &&
                        "Max length is 2000 char."}
                    </p>
                )}
                    <button
                    type="submit"
                    className="mt-5 px-6 py-2 font-semibold text text-blue border-2 border-blue hover:shadow-md hover:shadow-blue transition duration-500"
                >
                    SUBMIT
                </button>
                </form>
                </div>
                <div className="pr-20 basis-[40%] gap-16">
                <div className="mt-8 md:mt-0">
                <h4 className="font-semibold">Phone</h4>
                <p className="mt-4">
                +963 996 697 253
                </p>
                </div>
                <div className="mt-8 ">
                <h4 className="font-semibold">Email</h4>
                <p className="mt-4">osamaaabdalmalik@gmail.com</p>
                </div>
                <div className="mt-8">
                <h4 className="font-bold">Follow me:</h4>
                <div className="mt-4">
                <SocialMediaIcons/>
                </div>
                </div>
                </div>
            </div>
        </motion.div>
    </section>
)
}

export default Contact