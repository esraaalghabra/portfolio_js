import React from 'react'

const HText = ({text}) => {
  return (
    <>
    <h1 className='relative font-poppins text-[25px] md:text-[50px]'>{text}</h1>
    <h4
    className="font-tourney text-[50px] md:text-[100px] z-0 text-blue absolute opacity-[0.03] leading-relaxed tracking-wider max-w-[1100px] ">
        {text}
    </h4>
    </>
  )
}

export default HText
