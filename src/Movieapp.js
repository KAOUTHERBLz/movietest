import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import NavBar from './Component/NavBar'
import Aboutus from './Pages/Aboutus'
import Admin from './Pages/Admin'
import Contactus from './Pages/Contactus'
import Erreur from './Pages/Erreur'

const Movieapp = () => {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<App/>}/> 
            
            <Route exact path='/Aboutus' element={<Aboutus/>}/> 
            
            <Route exact path='/Contactus' element={<Contactus/>}/> 
            
            <Route exact path='/Admin' element={<Admin/>}/> 
            
            <Route exact path='/*' element={<Erreur/>}/> 
            


        </Routes>
    </div>
  )
}

export default Movieapp