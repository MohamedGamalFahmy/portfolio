
import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">📩 Contact Me</h2>
        <p className="text-gray-400 mb-6">Welcome My Contact</p>
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
        >
          Say Hello
        </a>
        {/* ---------------------------- */}




      </div>
    </section>
  )
}

export default Contact