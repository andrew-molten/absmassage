import React from 'react'
import Link from 'next/link'

interface Props {
  handleOpenMenuClick: () => void
}

function NavLinks({ handleOpenMenuClick }: Props) {
  return (
    <>
      {' '}
      <Link href={'/'} onClick={handleOpenMenuClick} className="nav-link">
        Home
      </Link>
      <Link
        href={'/services'}
        onClick={handleOpenMenuClick}
        className="nav-link"
      >
        Services
      </Link>
      <Link href={'/about'} onClick={handleOpenMenuClick} className="nav-link">
        About
      </Link>
      <Link href={'/faq'} onClick={handleOpenMenuClick} className="nav-link">
        FAQ
      </Link>
      <Link
        href={'/contact'}
        onClick={handleOpenMenuClick}
        className="nav-link"
      >
        Contact
      </Link>
      <Link href={'/blog'} onClick={handleOpenMenuClick} className="nav-link">
        Blog
      </Link>
      <a
        className="nav-link nav-book-now"
        href="https://andrew-bolton-massage-and-yoga.cliniko.com/bookings#service"
      >
        Book Now
      </a>
    </>
  )
}

export default NavLinks
