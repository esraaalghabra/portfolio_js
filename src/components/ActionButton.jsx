import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from "framer-motion";
const ActionButton = ({page, setSelctedPage}) => {
  return (
    <AnchorLink
          href={`#${page}`}
          className="mt-8">
            <motion.button
            whileHover={{scale: 0.9, duration:0.5, boxShadow: "0px 0px 8px"}}
            onClick={() => setSelctedPage(page)}
            className="px-6 py-2 font-semibold text text-blue border-2 border-blue hover:shadow-md hover:shadow-blue transition duration-500">
              Lit’s Discuss
            </motion.button>
          </AnchorLink>
  )
}

export default ActionButton