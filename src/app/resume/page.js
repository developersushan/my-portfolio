"use client"
import React, { useState } from 'react'
import ResumeButton from '../components/resume/ResumeButton'
import Com1 from '../components/resume/Com1'
import Com2 from '../components/resume/Com2'
import Com3 from '../components/resume/Com3'
import Com4 from '../components/resume/Com4'

const page = () => {
  const [isSelected,setIsSelected] =useState(0)
  const buttonData =[
    {
        id:1,
        title:'Experience'
    },
    {
        id:2,
        title:'Education'
    },
    {
        id:3,
        title:'Skill'
    },
    {
        id:4,
        title:'About Me'
    },
]
const RenderComponent =({index})=>{
  switch (index) {
    case 0: return <Com1/>
      break;
      case 1: return <Com1/>
      break;
      case 2: return <Com2/>
      break;
      case 3: return <Com3/>
      break;
      case 4: return <Com4/>
      break;
  
    default:
      break;
  }

}
  return (
    <div className='w-[calc(100%_-_12px)] xl:w-[1200px] mx-auto'>
      <div className='flex md:flex-row flex-col  gap-3 md:py-10 my-10'>
        <div className='w-full md:w-[40%]'>
          <h2 className='text-3xl'>why hire me ?</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, rem!</p>
          <div className='mt-8'>
          <ResumeButton buttonData={buttonData} isSelected={isSelected} setIsSelected={setIsSelected}/>
          </div>
        </div>
        <div className='w-full md:w-[60%]'>
          <RenderComponent index={isSelected} />
        </div>
      </div>
    </div>
  )
}

export default page
