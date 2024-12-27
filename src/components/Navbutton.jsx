import React from 'react'

const Navbutton = (props) => {
  return (
    <div>
      <li className='hover:text-green-400 max-sm:text-[12px] text-white pl-5 pr-5 font-orbitron text-lg hover:underline cursor-pointer  '>{props.name}</li>
    </div>
  )
}

export default Navbutton
