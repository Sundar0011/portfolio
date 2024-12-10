import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between'>
      <div>
        <li className=' font-rubikdirt text-[24px] list-none'>Sundaravel</li>
      </div>
      <div>
      <ul className=' flex '>
        <li className='pl-10 font-orbitron text-lg hover:underline cursor-pointer'>Home</li>
        <li className='pl-10 font-orbitron text-lg hover:underline cursor-pointer'>Skills</li>
        <li className='pl-10 font-orbitron text-lg hover:underline cursor-pointer'>Project</li>
        <li className='pl-10 font-orbitron text-lg hover:underline cursor-pointer'>Resume</li>
        <li className='pl-10 font-orbitron text-lg hover:underline cursor-pointer'>Contact Page</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
