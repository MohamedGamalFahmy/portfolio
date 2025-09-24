import React from "react";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { me1, bg2 } from "../assets";

const Hero = () => {
  const icon = [
    { id: 1, img: <FaGithub />, name: "github", golink: "https://github.com/MohamedGamalFahmy" },
    { id: 2, img: <FaLinkedin />, name: "Linkedin", golink: "#" },
    { id: 3, img: <FaGoogle />, name: "Gmail", golink: "#" },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-white text-center w-full"
      style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay غامق */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        {/* الصورة الشخصية */}
        <img
          src={me1}
          alt="My Profile"
          className="w-52 h-52 rounded-full border-4 border-white shadow-lg "
        />

        {/* النص */}
        <h1 className="text-2xl md:text-4xl font-bold">Hello, I'm Mohamed Gamal</h1>
        <p className="text-gray-300 text-2xl md:text-4xl font-bold p-2">Frontend Developer</p>

        {/* أيقونات السوشيال */}
        <ul className="flex gap-2 text-2xl ">
          {icon.map((item) => (
            <li key={item.id}>
              <a
                href={item.golink}
                className=" p-1 rounded-full transition duration-300 ease-in-out  hover:text-teal-500 "
              >
                {item.img}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
