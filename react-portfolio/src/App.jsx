import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import About from './pages/About.jsx'
import NoPage from './pages/NoPage.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={ <Portfolio /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <NoPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App