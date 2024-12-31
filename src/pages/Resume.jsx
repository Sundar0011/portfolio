import React from 'react'
import Heading from '../components/Heading'
import { MdDownload } from "react-icons/md";
const Resume = () => {
  const resumeLink="Sundaravel_CSE_NCT.pdf";
  return (
    <div>
        <div className=''>
            <Heading  name="Resume"/>
        </div>   
        <div className=' grid sm:grid-cols-2 grid-row-2 '>
          <div data-aos='zoom-out' className='max-sm:order-2   '>
            <div className='  font-audiowide  text-white flex justify-center mt-10 ml-2 mr-2 p-5'>
            Here’s a snapshot of my journey, skills, and achievements. Feel free to 
            explore my experience and download a copy of my resume for more details!
            </div>
            <div className=' pl-7 font-audiowide text-green-400'>Click here to download Resume</div>
            <button className=' border  border-cyan-400 ml-7 mt-1 rounded-lg w-[100px]   text-white flex justify-center p-1 '>
            <a
              href={resumeLink}
              download="My_Resume.pdf" // Suggest a filename for the downloaded file
              className=" text-white font-semibold rounded-md shadow-md hover:bg-green-400 transition-all duration-300"
              >
                <MdDownload />
              </a>
            </button>
            </div> 
            <div data-aos='zoom-out'  className=' sm:order-1  p-5  lg:flex justify-center '>
                <img className=' lg:w-[400px] ' src="resume.png" alt="" />
            </div>

        </div> 
    </div>
  )
}

export default Resume
