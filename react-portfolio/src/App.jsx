import './App.css'

import { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext, ThemeContextProvider } from './context/ThemeContext.jsx'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import About from './pages/About.jsx'
import NoPage from './pages/NoPage.jsx'

function ThemeBody({children}) {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle('darkmode', darkMode);
  }, [darkMode]);

  return <>{children}</>;
}

function App() {
  return (
    <>
      <BrowserRouter>
          <ThemeContextProvider>
            <ThemeBody>
              <Header />
              <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
              <Footer />
            </ThemeBody>
          </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App