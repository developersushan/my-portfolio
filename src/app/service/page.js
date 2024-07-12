import React from 'react'
import { serviceData } from '../utils/serviceData'
import { FiArrowDownRight } from "react-icons/fi";
const page = () => {
  return (
    <div className='w-[calc(100%_-_12px)] xl:w-[1200px] mx-auto py-4 md:py-0'>
      <div className='my-4 grid md:grid-cols-2 gap-5 '>
        {
          serviceData.map((item)=>(
            <div key={item.id} className={`bg-slate-800 p-5  ${item.id==1?'custom-border':''} ${item.id==2?'custom-border':''} ${item.id==3?'custom-border':''} ${item.id==4?'custom-border':''}  rounded `}>
              <div className='flex items-center justify-between'>
              <span className={`text-xl md:text-3xl font-bold ${item.id==1?'group-hover:text-red-400':''} `}>{item.count}</span>
              <span className='text-4xl font-medium text-green-400  bg-white rounded-full p-2'><FiArrowDownRight/></span>
              </div>
              <h3 className='text-xl md:text-3xl font-semibold mb-2 capitalize'>{item.title}</h3>
              <p className='text-sm'>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page
