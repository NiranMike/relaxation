import Image from 'next/image'
import React from 'react'

const SmallCard = ({ img, location, distance }) => {
    
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 transform ease-in-out'>
        <div className='relative md:h-16 md:w-16 h-12 w-12'>
          <Image 
                src={`/${img}`}
                alt=''
          fill
          className='rounded-lg'
          />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500 '>{distance}</h3>
      </div>
    </div>
    
  )
}

export default SmallCard