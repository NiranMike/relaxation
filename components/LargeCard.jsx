import React from 'react'
import  Image  from 'next/image';

const LargeCard = ({img, title, description, buttonText}) => {
  return (
      <section className='relative py-16 cursor-pointer'>
          <div className='relative h-96 min-w-[250px] md:min-w-[300px]'>
              <Image src={img} 
              className='rounded-2xl'
              fill style={{ objectFit: "cover"}} />
          </div>

          <div className='absolute top-32 left-4 sm:left-12'>
              <h3 className='md:text-4xl text-xl font-bold mb-3 w-64'>{ title }</h3>
              <p>{description}</p>

              <button className='text-sm font-bold text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{ buttonText }</button>
          </div>
      </section>
  )
}

export default LargeCard