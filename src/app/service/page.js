import React from 'react'
import ServicesCom from '../components/Services/ServicesCom'

const page = () => {
  return (
    <div className='w-[calc(100%_-_12px)] xl:w-[1200px] mx-auto py-4 md:py-0'>
      <div className='custom-image flex justify-start px-4 md:px-10 items-center mt-4'>
        <h3 className='text-3xl md:text-5xl font-semibold md:font-bold capitalize z-50'>services center .</h3>
      </div>
      <ServicesCom/>
    </div>
  )
}

export default page
