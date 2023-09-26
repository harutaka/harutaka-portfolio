import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div id="banner" className="relative w-full h-[200px] md:h-[480px]">
      <Image
        src="/img/portfolio_cover.jpg"
        alt="harutaka portfolio"
        objectFit="cover"
        layout="fill"
        priority={true}
      />
  </div>
  )
}

export default Banner