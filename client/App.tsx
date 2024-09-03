import { Outlet } from 'react-router-dom'
import NavBar from './components/Nav/NavBar.tsx'
import Footer from './components/Nav/Footer.tsx'
import { useState } from 'react'

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
        <Outlet />
      </div>
      <Footer isSmallScreen={isSmallScreen} />
    </div>
  )
}

export default App
