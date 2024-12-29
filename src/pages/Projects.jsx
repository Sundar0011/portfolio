import React from 'react'
import Heading from '../components/Heading'
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div>
      <Heading name="Projects "/>
      <div className='w-full grid lg:grid-cols-10'>
            <div className=' col-span-7 aspect-w-16 aspect-h-9'>
                <video className='w-full' src="project.mp4" width="600"
                loop
                muted
                autoPlay
                playsInline></video>
                
            </div>
            <div className=' col-span-2 text-white pt-10 flex justify-center'>
                <div className=' font-audiowide text-center'>      My project is a user-centric application built with React, Tailwind CSS and Java Spring Boot to deliver personalized solutions efficiently. It combines a responsive design, AI-powered features, and a robust Oracle SQL database, showcasing my technical expertise and problem-solving skills.<div className='w-full  mt-5 font-audiowide text-green-400 flex justify-center'>Explore in github <button className='  border border-cyan-400 ml-2 mt-1 rounded-lg w-[100px] h-[30px] flex justify-center p-1 '> <FaGithub className=' text-white text-center' /> </button></div></div>
                
                
            </div>
      </div>
    </div>
  )
}

export default Projects
