import React from 'react'
import Heading from '../components/Heading'
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div>
      <Heading name="Projects "/>
      <div className='w-full grid lg:grid-cols-10 '>
            <div data-aos='fade-right' className=' col-span-7 aspect-w-16 aspect-h-9 '>
                <video className='w-full' src="project.mp4" width="600"
                loop
                muted
                autoPlay
                playsInline></video>
                
            </div>
            <div data-aos='fade-left' className='flex justify-center items-center text-center col-span-3 text-white p-3 '>
              <div className=' '>
                  <div className=' font-audiowide'> 
                      My project is a user-centric application built with React, Tailwind CSS and Java Spring
                        Boot to deliver personalized solutions efficiently. It combines a responsive design, AI-powered 
                        features, and a robust Oracle SQL database, showcasing my technical expertise and problem-solving skills.
                      
                  </div>
                  <div className=' '>
                    <div className='w-full  mt-5 font-audiowide text-green-400'>Explore in github 
                    </div>
                    <button className='  border border-cyan-400 ml-2 mt-1 rounded-lg w-[100px] h-[40px] '>
                    <a href="https://github.com/Sundar0011" target="_blank" rel="noopener noreferrer" className="text-white flex justify-center items-center">
                          <FaGithub className=' text-white text-center' />
                          </a>
                    </button>
                 
                  </div> 
              </div>
            </div>
      </div>
    </div>
  )
}

export default Projects
