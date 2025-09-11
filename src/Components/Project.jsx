import React from 'react'

const Project = () => {
  const projects = [
    { title: "Ecommerce", desc: "E-commerce website using React + Tailwind", LiveDimo: "https://ecommerce-xc5r.vercel.app/" , githup:"https://github.com/MohamedGamalFahmy/Ecommerce"},
    { title: "CofeShop", desc: "CofeShop website using React + Tailwind", LiveDimo: "https://cofe-shop-nine.vercel.app/" , githup:"https://github.com/MohamedGamalFahmy/CofeShop" },
        { title: "CofeShop", desc: "CofeShop website using React + Tailwind", LiveDimo: "https://cofe-shop-nine.vercel.app/" , githup:"https://github.com/MohamedGamalFahmy/CofeShop" },
    { title: "CofeShop", desc: "CofeShop website using React + Tailwind", LiveDimo: "https://cofe-shop-nine.vercel.app/" , githup:"https://github.com/MohamedGamalFahmy/CofeShop" },

  ];

  return (
    <section id = "Project"  className="py-20 relative z-10  text-white  bg-[#101832]  sm:mt-10 ">
      <div className=" max-w-full mx-auto px-6  ">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 My Projects</h2>
        <div className= " sm:grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((p, i) => (
            <div key={i} className=" sm: my-3 border border-white/10
              bg-gray-500/10/ backdrop-blur-md shadow-lg rounded-xl p-6   hover:scale-105 transition duration-100">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <div className=''>
                <a
                  className="group relative  inline-block overflow-hidden border border-indigo-600 px-8 py-3 m-2  focus:ring-black focus:outline-hidden hover:rounded-full"
                  href={p.LiveDimo}
                >
                  <span
                    className="absolute inset-y-0 left-0 w-[2px] bg-teal-500 transition-all group-hover:w-full"
                  ></span>

                  <span
                    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                  >
                    Live Dimo
                  </span>
                </a>
                <a
                  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 m-2  focus:ring-3 focus:outline-hidden hover:rounded-full"
                  href={p.githup}
                >
                  <span
                    className="absolute inset-y-0 left-0 w-[2px] bg-teal-500 transition-all group-hover:w-full"
                  ></span>

                  <span
                    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                  >
                    GitHup
                  </span>
                </a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Project