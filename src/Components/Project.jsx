import React from 'react'

const Project = () => {
 const projects = [
    { title: "SmartShop", desc: "E-commerce dashboard with Firebase", link: "#" },
    { title: "Expense Tracker", desc: "Track daily income & expenses", link: "#" },
    { title: "Portfolio Website", desc: "Personal website using React + Tailwind", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 op text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <a href={p.link} className="text-purple-400 hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
     )
}

export default Project