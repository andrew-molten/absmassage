import { Outlet } from 'react-router-dom'
import NavBar from './components/Nav/NavBar.tsx'
import Footer from './components/Nav/Footer.tsx'
import { useState } from 'react'
import React from 'react'

function App() {
  const [navHeight, setNavHeight] = useState(41)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  return (
    <div>
      <NavBar
        navHeight={navHeight}
        setNavHeight={setNavHeight}
        isSmallScreen={isSmallScreen}
        setIsSmallScreen={setIsSmallScreen}
      />
      <div style={{ marginTop: `${navHeight}px` }}>
        <h1>App</h1>
        <Outlet />
      </div>
      {/* <Footer isSmallScreen={isSmallScreen} /> */}
    </div>
  )
}

export default App
