"use client"
import { serviceData } from '@/app/utils/serviceData';
import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";
const ServicesCom = () => {
  return (
    <div className='md:my-10 grid md:grid-cols-2 gap-5 py-10'>
    {
      serviceData.map((item)=>(
        <div key={item.id} className={`bg-slate-800 p-5  ${item.id==1?'custom-border group':''} ${item.id==2?'custom-border group':''} ${item.id==3?'custom-border group':''} ${item.id==4?'custom-border group':''}  rounded `}>
          <div className='flex items-center justify-between'>
          <span className={`text-xl md:text-3xl font-bold ${item.id==1?'group-hover:text-green-400':''} ${item.id==2?'group-hover:text-green-400':''} ${item.id==3?'group-hover:text-green-400':''} ${item.id==4?'group-hover:text-green-400':''}`}>{item.count}</span>
          <span className={`text-xl md:text-4xl font-medium text-green-400  bg-white rounded-full p-2  ${item.id==1?'group-hover:text-white group-hover:-rotate-45 transition ease-in duration-200 group-hover:bg-green-400':''} ${item.id==2?'group-hover:text-white group-hover:bg-green-400 group-hover:-rotate-45 transition ease-in duration-200':''} ${item.id==3?'group-hover:text-white group-hover:bg-green-400 group-hover:-rotate-45 transition ease-in duration-200':''} ${item.id==4?'group-hover:text-white group-hover:bg-green-400 group-hover:-rotate-45 transition ease-in duration-200':''} `}><FiArrowDownRight/></span>
          </div>
          <h3 className={`text-xl md:text-3xl font-semibold mb-2 capitalize ${item.id==1?'group-hover:text-green-400':''} ${item.id==2?'group-hover:text-green-400':''} ${item.id==3?'group-hover:text-green-400':''} ${item.id==4?'group-hover:text-green-400':''}`}>{item.title}</h3>
          <p className='text-sm'>{item.description}</p>
        </div>
      ))
    }
  </div>
  )
}

export default ServicesCom
