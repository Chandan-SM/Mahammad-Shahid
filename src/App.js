import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App