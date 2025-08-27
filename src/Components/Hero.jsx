import React from 'react'
import { me } from '../assets'

const Hero = () => {
    return (
  <section className="relative flex items-center justify-between h-screen px-10 text-white overflow-hidden">
      {/* الخلفية النجوم */}
      <div className="absolute inset-0 bg-black">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

            {/* المحتوى */}
            <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* النص - شمال */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Hi, I'm <span className="text-teal-400">Mohamed</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-6">
                        Front-End Developer | Building modern web apps with React & Tailwind
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
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
                <div className="flex-1 flex justify-center order-1 md:order-2">
                    <img
                        src={me}
                        alt="My Profile"
                        className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-teal-500"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
