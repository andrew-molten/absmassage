import { NavLink } from 'react-router-dom'

interface Props {
  handleOpenMenuClick: () => void
}

function NavLinks({ handleOpenMenuClick }: Props) {
  return (
    <>
      {' '}
      <NavLink
        to={'/'}
        onClick={handleOpenMenuClick}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to={'/massage-&-prices'}
        onClick={handleOpenMenuClick}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Massage & Prices
      </NavLink>
      <NavLink
        to={'/about'}
        onClick={handleOpenMenuClick}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        About
      </NavLink>
      <NavLink
        to={'/faq'}
        onClick={handleOpenMenuClick}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        FAQ
      </NavLink>
      <NavLink
        to={'/contact'}
        onClick={handleOpenMenuClick}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Contact
      </NavLink>
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
