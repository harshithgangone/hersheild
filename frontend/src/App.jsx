import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Home from './pages/Home/Home'


const App = () => {
  const navigate=useNavigate()
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage navigate={navigate}/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
