"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import BannerImage from "../../assets/image/IMG_20240711_102926.jpg"
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandUpwork ,TbBrandFiverr,TbBrandGithub} from "react-icons/tb";
import { AiOutlineDownload } from "react-icons/ai";
const Banner = () => {
  const downloadFile =()=>{
    const resumeFilePath = resume;
    const link = document.createElement('a')
    link.href = resumeFilePath;
    link.download = resumeFilePath;
    link.click()
  }
    
  return (
    <div className='py-[70px] md:flex-row flex flex-col-reverse  justify-between gap-5 items-center'>
      <div className=''>
        <h3>Software Developer</h3>
        <div>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hello I'm",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `Hello I'm Dev Sushan`,
        1000,
        "Hello I'm Web Designer",
        1000,
        "Hello I'm Web Developer",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block' ,}}
      repeat={Infinity}
    />
        </div>
        <p className='  md:w-[500px]'>I excel at crafting elegant digital experiences and i am proficient in various programming languages and technologies</p>
        <div className="flex gap-10 mt-5 items-center">
            <button onClick={downloadFile} download  className='flex gap-2 items-center text-sm border py-1 px-3 rounded-full border-green-400 text-green-400'>Download CV <span className='text-base'><AiOutlineDownload/></span></button>
            <div>
                <ul className='flex gap-3 items-center'>
                    <li className='border p-1 rounded-full border-green-400'><a href="https://github.com/developersushan"><TbBrandGithub/></a></li>
                    <li className='border p-1 rounded-full border-green-400'><a href="https://www.linkedin.com/in/sushanto-coch-517971227/"><FaLinkedinIn/> </a></li>
                    <li className='border p-1 rounded-full border-green-400'><a href="https://www.upwork.com/freelancers/~01c78b6f894071ed18"><TbBrandUpwork/></a></li>
                    <li className='border p-1 rounded-full border-green-400'><a href="https://www.fiverr.com/sushanto45?up_rollout=true"><TbBrandFiverr/></a></li>
                </ul>
            </div>
        </div>
      </div>

        <div className="lg:w-[400px] lg:h-[400px]">
            <Image src={BannerImage} className='rounded-full bg-cover lg:w-[300px] lg:h-[300px]' width={600} height={600} alt="banner image" />
        </div>
    </div>
  )
}

export default Banner
