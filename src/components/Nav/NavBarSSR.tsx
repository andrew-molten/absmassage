'use client'

import absmlogo from '../../../images/logos/andrew-bolton-sports-massage-logo.webp'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import React from 'react'
import Link from 'next/link'

// interface Props {
//   navHeight: number
//   setNavHeight: (height: number) => void
//   isSmallScreen: boolean
//   setIsSmallScreen: (bool: boolean) => void
// }

function NavBarSSR() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [screenSize, setScreenSize] = useState<number>()
  const [navHeight, setNavHeight] = useState(60)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setScreenSize(window.innerWidth)
        setNavHeight(logo.offsetHeight)
      }
    }

    setScreenSize(window.innerWidth)
    const logo = document.querySelector('.header-logo img') as HTMLImageElement
    if (typeof window !== 'undefined') {
      if (logo.complete) {
        setNavHeight(logo.offsetHeight)
      } else if (logo) {
        // Wait for load
        logo.onload = () => {
          setNavHeight(logo.offsetHeight)
        }
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [navHeight])

  // update css when navHeight changes
  useEffect(() => {
    if (navHeight) {
      document.documentElement.style.setProperty(
        '--nav-height',
        `${navHeight}px`,
      )
    }
  }, [navHeight])

  useEffect(() => {
    if (screenSize && screenSize < 820) {
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

  const ATTRIBUTION = `
  Icon by fontAwesome from https://fontawesome.com/ & React Icons, licensed under CC BY 4.0 License - https://creativecommons.org/licenses/by/4.0/.
`

  return (
    <div
      className={`nav-bar ${isMenuOpen && isSmallScreen ? 'open' : ''}`}
      style={{
        maxHeight: `${!isMenuOpen && isSmallScreen ? navHeight : 420}px`,
      }}
    >
      <Link
        href={'/'}
        className="header-logo nav-link"
        onClick={handleOpenMenuClick}
      >
        <img src={absmlogo.src} alt="Andrew Bolton Sports Massage logo" />
      </Link>

      {isSmallScreen && (
        <div
          className="menu-btn-container"
          style={{
            height: `${!isMenuOpen && isSmallScreen && navHeight}px`,
            fontSize: `${!isMenuOpen && isSmallScreen && navHeight * 0.66}px`,
            right: `${!isMenuOpen && isSmallScreen && navHeight * 0.5}px`,
          }}
        >
          <button className="menu-btn" onClick={handleMenuToggle}>
            <FaBars />
            <div style={{ display: 'none' }}>{ATTRIBUTION}</div>
          </button>
        </div>
      )}
      <div
        className={`menu-container ${isMenuOpen && isSmallScreen ? 'open' : ''}`}
      >
        {!isSmallScreen ? (
          <NavLinks handleOpenMenuClick={handleOpenMenuClick} />
        ) : (
          <div>
            <div
              className={`accordian ${isMenuOpen ? 'open' : ''}`}
              style={{
                marginRight: `${!isMenuOpen && isSmallScreen && navHeight * 0.5}px`,
              }}
            >
              <NavLinks handleOpenMenuClick={handleOpenMenuClick} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBarSSR
