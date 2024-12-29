import React from 'react';
import { FaHtml5, FaJsSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import Heading from '../components/Heading';
const Skills = () => {
  return (
    <div className='mt-10'>
      <Heading name="Skills"/>
        <div className='grid grid-cols-10 '>
           
            <div className=' bg-transparent  p-10 col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              
              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                  <FaHtml5  className='w-full h-full object-cover text-orange-400'/>
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Html</h2>
              </div>
              

              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <IoLogoCss3 className='w-full h-full object-cover text-cyan-500'/>
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Css</h2>
              </div>


              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <IoLogoJavascript className='w-full h-full object-cover text-yellow-400'/>
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Java Script</h2>
              </div>


              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <FaReact className='w-full h-full object-cover text-cyan-500'/>
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>React</h2>
              </div>



              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <SiTailwindcss className='w-full h-full object-cover text-cyan-400' />
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Tailwind css</h2>
              </div>



              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <FaJava className='w-full h-full object-cover text-red-500'/>
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Java</h2>
              </div>



              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <SiSpringboot className='w-full h-full object-cover text-cyan-400'/>
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Spring Boot</h2>
              </div>



              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <img className='w-full h-full object-cover' src="sql.png" alt="" />
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Oracle sql Developer</h2>
              </div>


              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <FaGithub className='w-full h-full object-cover text-white'/>                
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Git hub</h2>
              </div>

              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <SiCanva className='w-full h-full object-cover text-blue-500'/>               
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Canva</h2>
              </div>

              <div className=' w-[120px]'>
                <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                <SiEclipseide className='w-full h-full object-cover text-blue-700'/>               
                </div>
                <h2 className='text-white text-center w-full font-audiowide'>Eclips</h2>
              </div>
            </div>
            <div className='bg-green-400 col-span-4'>
              <img className='p-2w-full h-full object-cover' src="bg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Skills
