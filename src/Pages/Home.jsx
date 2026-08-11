import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <div>
       <Toaster reverseOrder={false} />
      <Navbar />
      <Hero />
      <Work />
      <Skills/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home