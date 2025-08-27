import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-800/40 backdrop-blur-sm text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mohamed.dev</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
        <ul className='flex gap-6'>
          <li>1</li>
          <li>3</li>
          <li>2</li>
          <li>4</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
