import { NavLink } from 'react-router-dom'

function NavLinks() {
  return (
    <>
      {' '}
      <NavLink
        to={'/massage-&-prices'}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Massage & Prices
      </NavLink>
      <NavLink
        to={'/about'}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        About
      </NavLink>
      <NavLink
        to={'/faq'}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        FAQ
      </NavLink>
      <NavLink
        to={'/contact'}
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
