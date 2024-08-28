import { NavLink } from 'react-router-dom'
import absmlogo from '../../../images/logos/andrew-bolton-sports-massage-logo.webp'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'
// import { FaBars } from "react-icons/fa6";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (screenSize < 690) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }, [screenSize])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="nav-bar">
      <NavLink to={'/'} className="header-logo nav-link">
        <img src={absmlogo} alt="Andrew Bolton Sports Massage logo" />
      </NavLink>

      <div className="menu-container">
        {!isSmallScreen ? (
          <NavLinks />
        ) : (
          <>
            <button className="menu-btn" onClick={handleMenuToggle}>
              Menu
            </button>

            <div className={`accordian ${isMenuOpen ? 'open' : ''}`}>
              <NavLinks />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
