import { NavLink } from 'react-router-dom'
import absmlogo from '../../../images/logos/andrew-bolton-sports-massage-logo.webp'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'
// import { FaBars } from "react-icons/fa6";

interface Props {
  navHeight: number
  setNavHeight: (height: number) => void
  isSmallScreen: boolean
  setIsSmallScreen: (bool: boolean) => void
}

function NavBar({
  navHeight,
  setNavHeight,
  isSmallScreen,
  setIsSmallScreen,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
      setNavHeight(logo.offsetHeight)
    }

    const logo = document.querySelector('.header-logo img') as HTMLImageElement
    logo.onload = () => {
      setNavHeight(logo.offsetHeight + 9)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setNavHeight])

  useEffect(() => {
    if (screenSize < 805) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }, [screenSize, setIsSmallScreen])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOpenMenuClick = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false)
    }
  }

  return (
    <div
      className={`nav-bar ${isMenuOpen && isSmallScreen ? 'open' : ''}`}
      style={{
        maxHeight: `${!isMenuOpen && isSmallScreen ? navHeight : 420}px`,
      }}
    >
      <NavLink
        to={'/'}
        className="header-logo nav-link"
        onClick={handleOpenMenuClick}
      >
        <img src={absmlogo} alt="Andrew Bolton Sports Massage logo" />
      </NavLink>

      {isSmallScreen && (
        <button className="menu-btn" onClick={handleMenuToggle}>
          Menu
        </button>
      )}
      <div
        className={`menu-container ${isMenuOpen && isSmallScreen ? 'open' : ''}`}
      >
        {!isSmallScreen ? (
          <NavLinks handleOpenMenuClick={handleOpenMenuClick} />
        ) : (
          <div>
            <div className={`accordian ${isMenuOpen ? 'open' : ''}`}>
              <NavLinks handleOpenMenuClick={handleOpenMenuClick} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
