import React from 'react'
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Projects from  "./Projects"
import Contacts from "./Contacts"
import Footer from "./Footer"

function AllComponent() {
  return (
    <div>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default AllComponent;