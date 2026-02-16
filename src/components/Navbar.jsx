import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
      <div className="mycontainer flex justify-between items-center px-4 py-8 h-8">

        <div className="logo font-bold ">
          <span className='text-green-500'> &lt; </span>

          Pass
          <span className='text-green-500'> OP / &gt;</span>

        </div>
        <ul>
          <li className='flex gap-3'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul>
        <button className='text-white bg-green-500 h-11 rounded-full flex justify-evenly items-center ring-white ring-1'>
          <img className='invert p-2 w-12' src="/icons/github.svg" alt="github logo" />
          <span className='font-bold px-3 text-lg'>Github</span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
