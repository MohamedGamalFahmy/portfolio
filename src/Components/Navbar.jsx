import React, { useState } from 'react'




const Navbar = () => {


  return (
    <div className='container max-w-full mx-auto' >
      <nav className="fixed top-0 w-full bg-gray-800/40 backdrop-blur-sm text-white shadow-md z-50">
        <div className="container max-w-full mx-auto px-6 py-4 flex justify-around items-center xs:flex-col sm:flex-row">
          <div>
            <h1 className="text-2xl font-bold">
              <a href="#"> Personal Porfolio</a>
            </h1>
          </div>
          <div >
            <ul className="flex gap-6 xs:hidden  md:flex md:gap-4  text-xl  ">
              <li><a href="#hero" className="group text-white transition duration-300  ">Home <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500'></span></a></li>

              <li><a href="#Project" className="group text-white transition duration-300  ">About <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500'></span></a></li>

              <li><a href="#Project" className="group text-white transition duration-300  ">Projects <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500'></span></a></li>
              <li><a href="#contact" className="group text-white transition duration-300  ">Contact <span className='block max-w-0 group-hover:max-w-full trantion duration-500 h-0.5 bg-teal-500'></span></a></li>
            </ul>
          </div>

        </div>
      </nav >
    </div >
  )
}

export default Navbar
