import React from 'react'
import './index.css'
import Project from './Components/Project'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <Navbar />
      <Hero />
      <Project/>
      <Contact />
      <Footer />
     
       </>
      )

    }





   
export default App
