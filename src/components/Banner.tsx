import React from 'react'
import Image from 'next/image'
import portfolioCover from "@/../public/img/portfolio_cover.jpg"

const Banner = () => {
  return (
    <div id="banner" className="relative">
      <Image
        src={portfolioCover}
        alt="harutaka portfolio"
        priority
        className='object-cover w-full h-[200px] md:h-[300px]'
      />
  </div>
  )
}

export default Banner