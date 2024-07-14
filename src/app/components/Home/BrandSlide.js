"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'
import Image1 from '../../assets/image/download.png'
import Image2 from '../../assets/image/download.jpeg'
import Image3 from '../../assets/image/download(1).png'
import Image4 from '../../assets/image/download(2).png'
import Image5 from '../../assets/image/download(3).png'
import Image6 from '../../assets/image/download(4).png'
import Image7 from '../../assets/image/download(5).png'
import Image8 from '../../assets/image/download(6).png'
import Image from 'next/image'
const BrandSlide = () => {
  return (
    <div className='my-6 py-10'>
        <Marquee pauseOnHover={true} className='' speed={80}>
            
        <div className='mr-6'>
            <Image src={Image1} className='w-[200px] h-[100px] rounded' width={300} alt="" />
        </div>
        <div className='mr-6'>
            <Image src={Image2} className='w-[200px] h-[100px] rounded' width={300} alt="" />
        </div>
        <div className='mr-6'>
            <Image src={Image3} className='w-[200px] h-[100px] rounded' width={300} alt="" />
        </div>
        <div className='mr-6'>
            <Image src={Image4} className='w-[200px] h-[100px] rounded' width={300} alt="" />
        </div>
        <div className='mr-6'>
            <Image src={Image5} className='w-[200px] h-[100px] rounded' width={300} alt="" />
        </div>
        <div className='mr-6'>
            <Image src={Image6} className='w-[200px] h-[100px] rounded' width={300} alt="" />
        </div>
        <div className='mr-6'>
            <Image src={Image7} className='w-[200px] h-[100px] rounded ' width={300} alt="" />
        </div>
        <div className='mr-6'>
            <Image src={Image8} className='w-[200px] h-[100px] rounded ' width={300} alt="" />
        </div>
      </Marquee>
    </div>
  )
}

export default BrandSlide
