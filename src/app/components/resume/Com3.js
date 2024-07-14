"use client"
import { experienceData } from '@/app/utils/ExperienceData'
import Image from 'next/image'
import React from 'react'
import HtmlLogo from '../../assets/image/brand/html.png';
import CssLogo from '../../assets/image/brand/css.png';
import TailwindLogo from '../../assets/image/brand/tailwind.png';
import BootstrapLogo from '../../assets/image/brand/Bootstrap.svg';
import JsLogo from '../../assets/image/brand/js.png';
import ReactLogo from '../../assets/image/brand/react.png';
import NextLogo from '../../assets/image/brand/next.png';
import NodeLogo from '../../assets/image/brand/node.png';
import ExpressLogo from '../../assets/image/brand/express.png';
import MongodbLogo from '../../assets/image/brand/mongodb.png';
import FigmaLogo from '../../assets/image/brand/figma.png';
const Com3 = () => {
  const ImageBrand =[
    {
      id:1,
      img:HtmlLogo
    },
    {
      id:2,
      img:CssLogo
    },
    {
      id:3,
      img:TailwindLogo
    },
    {
      id:4,
      img:BootstrapLogo
    },
    {
      id:5,
      img:JsLogo
    },
    {
      id:6,
      img:ReactLogo
    },
    {
      id:7,
      img:NextLogo
    },
    {
      id:8,
      img:NodeLogo
    },
    {
      id:9,
      img:ExpressLogo
    },
    {
      id:10,
      img:MongodbLogo
    },
    {
      id:11,
      img:FigmaLogo
    },

  ]
  return (
    <div>
      <h3 className='text-3xl font-semibold capitalize'>my skill</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt mollitia culpa ducimus enim odit quasi est soluta, voluptates reprehenderit quae consectetur</p>
      <div className='grid md:grid-cols-5 grid-cols-4 gap-5 mt-5 '>
        {
          ImageBrand.map((item)=>(
            <div key={item.id} className='bg-slate-700 p-5 rounded flex justify-center items-center'>
              <Image src={item.img} width={100 } className='w-[80px]' height={100} alt=''/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Com3
