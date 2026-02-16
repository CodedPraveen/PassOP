import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-800 text-white fixed bottom-0 w-full'>
      <div className="logo font-bold ">
        <span className='text-green-500'> &lt; </span>
        Pass
        <span className='text-green-500'> OP / &gt;</span> 
      </div>

      <div className="flex items-center justify-center">
        Created With <img className='m-2' width={20} height={20} src="./icons/heart.png" alt="" />by CodedPraveen
      </div>
    </div>
  )
}

export default Footer
