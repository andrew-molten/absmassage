import { Outlet } from 'react-router-dom'
import NavBar from './components/Nav/NavBar.tsx'
import Footer from './components/Nav/Footer.tsx'
import { useState } from 'react'

function App() {
  const [logoHeight, setLogoHeight] = useState(41)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  return (
    <div className="app-container">
      <NavBar
        logoHeight={logoHeight}
        setLogoHeight={setLogoHeight}
        isSmallScreen={isSmallScreen}
        setIsSmallScreen={setIsSmallScreen}
      />
      <div
        className="page-container"
        style={{ marginTop: `${isSmallScreen ? logoHeight : 0}px` }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
