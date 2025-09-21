import React, { useState } from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";



const Navbar = () => {
  const icon = [
    { id: 1, img: <FaGithub />, name: "github", golink: "https://github.com/MohamedGamalFahmy" },
    { id: 2, img: <TiSocialLinkedinCircular />, name: "Linkedin", golink: "#" },
    { id: 3, img: <FaFacebook />, name: "FaceBook", golink: "#" },
    { id: 4, img: <BiLogoGmail />, name: "Gmail", golink: "#" },

  ];

  return (
    <div className='container max-w-full mx-auto' >
      <nav className="fixed top-0 w-full bg-gray-800/40 backdrop-blur-sm text-white shadow-md z-50">
        <div className="container max-w-full mx-auto px-6 py-4 flex justify-between items-center xs:flex-col sm:flex-row">
          <div>
            <h1 className="text-2xl font-bold">
              <a href="#"> Mohamed Gamal</a>
            </h1>
          </div>
          <div >
            <ul className="flex gap-6 xs:hidden  md:flex md:gap-4  text-xl  ">
              <li><a href="#Project" className="group text-white transition duration-300  ">Projects <span className= 'block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500'></span></a></li>
              <li><a href="#Hero" className="group text-white transition duration-300 ">Home <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500'></span></a></li>
              <li><a href="#contact" className="group text-white transition duration-300  ">Contact <span className='block max-w-0 group-hover:max-w-full trantion duration-500 h-0.5 bg-teal-500'></span></a></li>
            </ul>
          </div>
          <div className=' flex  text-2xl '>
            {icon.map((item) => (
              <div id={item.id} className=' flex  ' >
                <ul className='xs:p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-teal-500   rounded-full  md:flex md:p-2 '>

                  <li className=''>
                    <a
                    
                    href={item.golink} 
                    
                    > {item.img}  </a>
                  </li>

                </ul>
              </div>

            ))}
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Navbar
