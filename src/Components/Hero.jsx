import React from "react";
import {  FaGithub, FaGoogle,  FaLinkedin } from "react-icons/fa";
import {me1 ,  bg2} from '../assets'

 const Hero = () => {
      const icon = [
        { id: 1, img: <FaGithub />, name: "github", golink: "https://github.com/MohamedGamalFahmy" },
        { id: 2, img: <FaLinkedin />, name: "Linkedin", golink: "#" },
        { id: 4, img: <FaGoogle />, name: "Gmail", golink: "#" },
    ];
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay غامق */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* الصورة الشخصية */}
        <img
          src={me1}
          alt="My Profile"
          className="w-52 h-52 rounded-full border-4 border-white shadow-lg  items-center"
        />

        {/* النص */}
        <h1 className="text-2xl md:text-4xl font-bold">Hello, I'm Mohamed Gamal</h1>
        <p className="text-gray-300 text-lg md:text-xl">Frontend Developer</p>

        {/* أيقونات السوشيال */}
        <div className="flex gap-2 mt-4 text-2xl">
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
    </section>
  );
};

export default Hero;
