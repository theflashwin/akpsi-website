import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Brothers from './pages/Brothers'
import Rush from './pages/Rush'
import Alumni from './pages/Alumni'
import CopyToClipboard from './components/CopyToClipboard';

import { ToastContainer, toast } from 'react-toastify';

function ExternalRedirect({ url }) {
  window.location.href = url;
  return null;
}

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
            <Route path='/alumni' element={<Alumni />} />

            {/* External Routes */}
            <Route path='/instagram' element={<ExternalRedirect url={"https://www.instagram.com/gtakpsi/?hl=en"} />} />
            <Route path='/linkedin' element={<ExternalRedirect url={"https://www.linkedin.com/company/gtakpsi/posts/?feedView=all"} />} />
            <Route path='/tiktok' element={<ExternalRedirect url={"https://www.tiktok.com/@gtakpsi?_t=8sNcVMDf0ZT&_r=1"} />} />
            <Route path='/calendar' element={<ExternalRedirect url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"} />} />

          </Routes>

        </BrowserRouter>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

      </div>

    </div>
  )
}

export default App