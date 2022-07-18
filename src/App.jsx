import { useState } from 'react'
import logo from './logo.svg'
import { Project } from './components/projects'
import './App.css'
import { WithSubnavigation } from './components/navbar'
import LargeWithLogoCentered from './components/footer'
import SplitWithImage from './components/testing'
import ContactFormWithSocialButtons from './components/contact'
import {Servicesimage} from  './services'
import WithBackgroundImage from './components/firstpage'
import { Routes,Route } from "react-router-dom";
import {Todolist} from './components/product'


function App() {
  

  return (

    <div className="App">
       <WithSubnavigation />
       <Routes>
       <Route path='/' element={<WithBackgroundImage />}></Route>
       <Route path='/products' element={<Todolist />}></Route>
        <Route path='/home' element={<SplitWithImage />}></Route>
        <Route path='/services' element={<Servicesimage />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<ContactFormWithSocialButtons />}></Route>
        </Routes>
       {/* <CarouselFadeExample /> */}
       {/* <Tabledata /> */}
       {/* <SmallWithLogoLeft /> */}
        
       <LargeWithLogoCentered />
       
    </div>
  )
}

export default App
