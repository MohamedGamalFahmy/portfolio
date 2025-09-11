import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";



const Navbar = () => {
  const icon = [
    { id: 1, img: <FaGithub />, name: "github", golink: "#" },
    { id: 2, img: <TiSocialLinkedinCircular />, name: "Linkedin", golink: "#" },
    { id: 3, img: <FaFacebook />, name: "FaceBook", golink: "#" },
    { id: 4, img: <BiLogoGmail />, name: "Gmail", golink: "#" },

  ];

  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-800/40 backdrop-blur-sm text-white shadow-md z-50">
        <div className="container max-w-full mx-auto px-6 py-4 flex justify-between items-center ">
          <div>
            <h1 className="text-2xl font-bold">
              <a href="#"> Mohamed Gamal</a>
            </h1>
          </div>
          <div>
            <ul className="flex gap-6 xs:hidden  md:flex gap-2 ">
              <li><a href="#Hero" className="hover:text-teal-400">Home</a></li>
              <li><a href="#Project" className="hover:text-teal-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>
          <div className=' flex  text-2xl '>
            {icon.map((item) => (
              <div id={item.id} className=' flex   ' >
                <ul className=' rounded-full '>

                  <li className='xs:flex  flex items-center justify-center  w-8 h-8 rounded-full bg-wite hover:scale-150  '>
                    <a href={item.golink}> {item.img} </a>
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
