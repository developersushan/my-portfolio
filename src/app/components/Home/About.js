"use client"
import Image from 'next/image'
import React from 'react'
import AboutImage from '../../assets/image/IMG_1491-01.jpeg'
const About = () => {
  return (
    <div className='my-10'>
      <div className='flex lg:flex-row flex-col gap-8'>
        <div className='w-full lg:w-1/2'>
            <Image className='rounded ' src={AboutImage} width={600} height={500} alt='about image'/>
        </div>
        <div className='w-full lg:w-1/2 bg-slate-800/45 p-5'>
            <h3 className='py-4 text-xl border-b-[1px] border-green-400'>About Us</h3>
            <p className='text-base leading-8 mt-5'>Hi there! I'm Sushan Singh a skilled MERN stack developer, proficient in MongoDB, Express, React, and Node-js . With expertise in web application development, I excels in building and enhancing projects of varying complexity, ensuring reliability and timely progress updates. If you are interested in working with a skilled & reliable MERN stack developer or full stack web developer, please don't hesitate to contact.</p>

            <button className="btn-custom py-1 px-5 rounded mt-10 md:mt-20">Contact now !</button>
        </div>
      </div>
    </div>
  )
}

export default About
