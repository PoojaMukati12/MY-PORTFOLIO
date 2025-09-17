import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'


function App() {
  
   
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route  path='/my-portfolio/' element={ 
        <>
        <Navbar/>
        <Home/>
        </>
      }/>
      <Route path='/my-portfolio/about' element={
        <>
         <Navbar/>
          <About/>
        </>
      }/>
      <Route path='/my-portfolio/projects' element={
        <>
          <Navbar/>
          <Project/>
        </>
        }/>
      <Route path='/my-portfolio/contacts' element={
        <>
          <Navbar/>
          <Contact/>
        </>
        
      }/>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
