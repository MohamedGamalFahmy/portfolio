import React from 'react'
import { me1 } from '../assets'

const Hero = () => {
    return (
  <section  id="Hero" className=" xs:mt-3  md:pb-0 md:my-0 border relative flex items-center justify-between  px-10 text-white overflow-hidden  ">
      
            {/* المحتوى */}
            <div className="  z-10 container mx-auto flex flex-col md:flex-row items-center gap-12  md:pb-0 md:my-0 ">
 
                {/* النص - شمال */}
                <div className="xs:mb-7 flex-1 text-center md:text-left order-2 md:order-1">
                    <h1 className="  text-4xl md:text-6xl font-bold text-white mb-4">
                        I'm <span className="text-teal-400">Mohamed Gamal</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-6">
                        Front-End Developer | Building modern web apps with React & Tailwind
                    </p>
                    <div className=" flex gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg transition"
                        >
                            Hire Me
                        </a>
                        <a
                            href="/cv.pdf"
                            className="border border-gray-500  hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-full transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* الصورة - يمين */}
                <div className=" xs:mt-32  md:mt-0 flex-1 flex justify-center order-1 md:order-2  ">
                    <img
                        src={me1}
                        alt="My Profile"
                        className=" md:mt-0  w-[300px] h-[350px] p-2 m-2 rounded-xl items-center  shadow-2xl shadow-teal-500  "
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
