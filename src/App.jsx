import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Brothers from './pages/Brothers'
import Gallery from './pages/Gallery'
import Rush from './pages/Rush'

import Navbar from './components/Navbar'

function App() {

  return (
    <div className='h-screen'>

      <div className="">

        <BrowserRouter>

          <Routes>

            {/* Routes */}
            <Route path='/' element={<Home />} index />
            <Route path='/brothers' element={<Brothers />} />
            <Route path='/rush' element={<Rush />} />
            <Route path='/gallery' element={<Gallery />} />

          </Routes>

        </BrowserRouter>

      </div>

    </div>
  )
}

export default App