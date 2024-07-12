import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {
    const [scrollCount,setScrollCount] = useState(false)
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 py-5'>
        <div className='bg-slate-800/45 p-5  rounded flex  gap-4'>
        <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}>
        {scrollCount&&<span className='text-3xl lg:text-5xl font-bold'><CountUp start={0} end={2} duration={2} />+ </span>}
        </ScrollTrigger>
        <h3>Year of <br/> Experience</h3>
        </div>
        <div className='bg-slate-800/45 p-5 rounded flex  gap-4'>
        <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}>
            {scrollCount &&  <span className='text-3xl lg:text-5xl font-bold'><CountUp start={0} end={25} duration={2} />+ </span>}
        </ScrollTrigger>
       
        <h3>Project<br/> Complete</h3>
        </div>
        <div className='bg-slate-800/45 p-5 rounded flex  gap-4'>
        <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}>
            {scrollCount &&   <span className='text-3xl lg:text-5xl font-bold'><CountUp start={0} end={9} duration={2} /> </span>}
        </ScrollTrigger>


        <h3>Technologies <br/> Mastered</h3>
        </div>
        <div className='bg-slate-800/45 p-5 rounded flex  gap-4'>
        <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}>
            {scrollCount &&<span className='text-3xl lg:text-5xl font-bold'><CountUp start={0} end={450} duration={2} /> </span>}
        </ScrollTrigger>
        <h3>Code <br/> Commits</h3>
        </div>

    </div>
  )
}

export default Counter
