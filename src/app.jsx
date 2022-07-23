import React from 'react'
import Header from "./Components/Header/Header"
import About from "./Components/About/about"
import Contact from "./Components/Contact/Contact"
import Experience from './Components/Experience/experience'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Portfolio from './Components/Portfolio/Portfolio'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App