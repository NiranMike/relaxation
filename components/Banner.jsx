import React from 'react'
import Image from 'next/image'
import bg from '../public/md1.jpg'
const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]'>
        <Image 
            src={bg}
            alt='bg'
            fill
            style={{ objectFit: "cover"}}
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Confused of where to go? We've got you</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-90 transition duration-150 font-bold'>I'm Flexible</button>
      </div>
    </div>
  )
}

export default Banner