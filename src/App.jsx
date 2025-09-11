import React from 'react'
import './index.css'
import Project from './Components/Project'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    < >
      <div className=' bg-gradient-to-br  from-[#080B14] via-[#070f33] to-[#070A14]'>
        <Navbar />
        <Hero />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )

}






export default App
