
"use client"
import React from 'react'

const ResumeButton = ({buttonData,setIsSelected,isSelected}) => {

  return (
    <div>
        <div className='flex flex-col gap-5'>
            {
                buttonData.map((item)=>(
                    <button key={item.id} onClick={()=>setIsSelected(item.id)} className={` ${isSelected == item.id ?'!bg-green-500 text-slate-800 ':''} bg-slate-700 md:w-[200px] font-medium px-10 py-2 rounded`}>{item.title}</button>
                ))
            }
          </div>
    </div>
  )
}

export default ResumeButton
