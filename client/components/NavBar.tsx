import { NavLink } from 'react-router-dom'
import absmlogo from '../../images/logos/andrew-bolton-sports-massage-logo.webp'
import '../styles/NavBar.scss'

function NavBar() {
  return (
    <div className="flex justify-between">
      <NavLink
        to={'/'}
        className="header-logo nav-link"

        // className={({ isActive }) =>
        //   isActive ? 'nav-link active-link' : 'nav-link'
        // }
      >
        <img src={absmlogo} alt="Andrew Bolton Sports Massage logo" />
      </NavLink>
      <div className="flex justify-between self-end">
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
          className="nav-link"
          href="https://andrew-bolton-massage-and-yoga.cliniko.com/bookings#service"
        >
          Book Now
        </a>
      </div>
    </div>
  )
}

export default NavBar
