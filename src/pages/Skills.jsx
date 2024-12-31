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
    <div className='  '>
      <Heading name="Skills"/>
        <div className='  h-auto w-auto grid sm:grid-cols-10 max-sm:grid-row-10'>
          <div className=' sm:col-span-5 max-sm:row-span-7 max-sm:order-2 p-2'>
            <div className=' grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4   gap-6'>
              <div className=' w-[120px]'>
                    <div data-aos='zoom-in' className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                      <FaHtml5  className='w-full h-full object-cover text-orange-400'/>
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Html</h2>
                  </div>
                  

                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <IoLogoCss3 className='w-full h-full object-cover text-cyan-500'/>
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Css</h2>
                  </div>


                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <IoLogoJavascript className='w-full h-full object-cover text-yellow-400'/>
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Java Script</h2>
                  </div>


                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <FaReact className='w-full h-full object-cover text-cyan-500'/>
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>React</h2>
                  </div>



                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <SiTailwindcss className='w-full h-full object-cover text-cyan-400' />
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Tailwind css</h2>
                  </div>



                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <FaJava className='w-full h-full object-cover text-red-500'/>
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Java</h2>
                  </div>



                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <SiSpringboot className='w-full h-full object-cover text-cyan-400'/>
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Spring Boot</h2>
                  </div>



                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <img className='w-full h-full object-cover' src="sql.png" alt="" />
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Oracle sql Developer</h2>
                  </div>


                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <FaGithub className='w-full h-full object-cover text-white'/>                
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Git hub</h2>
                  </div>

                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <SiCanva className='w-full h-full object-cover text-blue-500'/>               
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Canva</h2>
                  </div>

                  <div  data-aos='zoom-in' className=' w-[120px]'>
                    <div className='w-[120px] h-[120px] border-2 border-green-400 rounded-[50%] p-2'>
                    <SiEclipseide className='w-full h-full object-cover text-blue-700'/>               
                    </div>
                    <h2 className='text-white text-center w-full font-audiowide'>Eclips</h2>
                  </div>
            </div>
          </div>
          <div data-aos="zoom-out" className=' sm:col-span-5 max-sm:row-span-3 flex justify-center items-center'>
            <img className='p-2  object-cover' src="bg.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Skills
