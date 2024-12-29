import React from 'react'

const Heading = (props) => {
  return (
    <div>
        <div className='mt-20 mb-5 animate-slideLR'>
            <h1 className=' font-orbitron text-white text-[48px] text-center'>{props.name}</h1>
        </div>
    </div>
  )
}

export default Heading
