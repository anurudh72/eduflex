import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home} from './Home';
import Form from '../src/components/Form/Form';
import {Auth} from '../src/components/Auth/Auth.js'
import Navbar from './components/Navbar/Navbar';
function RouteForProject() {
  return (
    <>
    
    <Navbar />
    <Routes>
    <Route index element={<Home />} />
    <Route path='/form' element={<Form/>}/>
    <Route path="/auth" element={<Auth/>} />
    </Routes>
    </>
    
  )
}

export default RouteForProject
