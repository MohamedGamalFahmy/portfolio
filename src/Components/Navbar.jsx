import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, text: "Home", href: "#hero" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Projects", href: "#Project" },
    { id: 4, text: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-800/40 backdrop-blur-sm text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <a href="#">Personal Portfolio</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="group relative transition duration-300"
              >
                {link.text}
                <span className="absolute left-0 bottom-0 block h-0.5 w-0 bg-teal-500 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/80 absolute top-16 left-0 w-full p-6">
          <ul className="flex flex-col gap-6 text-lg text-center">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-teal-400  focus:text-teal-400 transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
