import { educationData } from '@/app/utils/EducationData'
import React from 'react'

const Com2 = () => {
  return (
    <div>
      <h3 className='text-3xl font-semibold capitalize'>my education</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt mollitia culpa ducimus enim odit quasi est soluta, voluptates reprehenderit quae consectetur</p>
      <div className='grid grid-cols-2 gap-5 mt-5 h-[300px]  overflow-y-scroll custom-scroll'>
        {
          educationData.map((item)=>(
            <div key={item.id} className='bg-slate-700 py-4 px-4 rounded'>
              <h3 className='text-green-500 text-sm font-medium leading-[27px]'>{item.date}</h3>
              <h2 className='text-xl font-semibold capitalize leading-[27px]'>{item.name}</h2>
              <p className='text-sm  leading-[2px] capitalize'><span className='text-5xl leading-0 text-green-400' >.</span> {item.company}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Com2
