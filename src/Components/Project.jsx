import React from 'react'
import { motion } from "framer-motion";
import { coffe, bg3, bg1 } from '../assets'

const Project = () => {
  const projects = [
    { title: "Ecommerce", img: bg1, desc: "E-commerce website using React + Tailwind", LiveDimo: "https://ecommerce-xc5r.vercel.app/", githup: "https://github.com/MohamedGamalFahmy/Ecommerce" },
    { title: "CofeShop", img: coffe, desc: "CofeShop website using React + Tailwind", LiveDimo: "https://cofe-shop-nine.vercel.app/", githup: "https://github.com/MohamedGamalFahmy/CofeShop" },

  ];

  return (
    <section id="Project" className="xs:pt-20  md:mt-0  md:py-7 relative z-10  text-white bg-[#101832]  sm:mt-10 ">
      <div className=" max-w-full mx-auto px-6  ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          <span className='text-4xl font-bold text-teal-500'>M</span>y <span className='text-4xl font-bold text-teal-500'>P</span>rojects
        </motion.h2>
        {/* <h2 className="text-3xl font-bold text-center mb-12"> My Projects</h2> */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-around"
        >
          {projects.map((p, i) => (
            <div key={i} className="relative my-3 border border-white/10 bg-gray-500/5 shadow-teal-500 backdrop-blur-md shadow-lg rounded-xl p-6 hover:scale-105 transition duration-100  bg-cover bg-center h-[400px]"
              style={{ backgroundImage: `url(${p.img})` }}
            >

              <h1 className=" text-4xl  font-black  mb-2">{p.title}</h1>

              <h3 className=" text-white text-1xl font-bold mb-4 "><span className='bg-blue-300/25'>{p.desc}</span> </h3>

              <div className='xs:absolute bottom-4 flex justify-between gap-1 group-sm:absolute-bottom-3 left-[40%] -translate-x-[40%] -translate-y-[50%] '>

                <a
                  href={p.LiveDimo}
                  target="_blank"
                  className="relative p-3 bg-teal-500 text-white rounded-xl font-normal overflow-hidden group"
                >
                  <span className="relative z-10">Live Demo</span>

                  {/* البوردر اللي هيجري */}
                  <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-teal-800">
                    <span className="absolute inset-0 rounded-xl group-hover:border-2 border-y-amber-200 animate-[snake_2s_linear_infinite]"></span>
                  </span>
                </a>
                <a
                  href={p.githup}
                  target="_blank"
                  className="relative p-3 bg-teal-500 text-white rounded-xl font-normal overflow-hidden group"
                >
                  <span className="relative z-10">GitHub</span>

                  {/* البوردر اللي هيجري */}
                  <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-teal-800">
                    <span className="absolute inset-0 rounded-xl group-hover:border-2 border-y-amber-200 animate-[snake_2s_linear_infinite]"></span>
                  </span>
                </a>


              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Project