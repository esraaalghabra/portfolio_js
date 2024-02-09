import { motion } from "framer-motion";

export const ProgressBar = ({skill, completed }) => {
    const containerStyles = "relative h-3 mx-auto w-full max-w-[500px] bg-gray-200 rounded-full";

    const fillerStyles = `h-full w-0 bg-blue rounded-full transition-all duration-500 ease-in-out`;

    const labelParcent = "absolute block -right-1 -top-7 text-xs font-poppins z-[-1] px-[2px] py-[px]";
    const labelSkill = "absolute block -top-7 text-lg font-poppins z-[-1] px-[2px] py-[px]";

    return (
            <section
            id="skills">
                <div className={containerStyles}>
                    <motion.div
                    className={fillerStyles}
                    animate={{ width: `${completed}%` }}
                    initial={{ width: "0%" }}
                    >
                    <span className={labelParcent}>{`${completed}%`}</span>
                    <span className={labelSkill}>{skill}</span>
                    </motion.div>
                </div>
            </section>
            );
};