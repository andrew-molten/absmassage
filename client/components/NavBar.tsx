import { NavLink } from 'react-router-dom'
import absmlogo from '../../images/logos/andrew-bolton-sports-massage-logo.webp'
import '../styles/NavBar.scss'

function NavBar() {
  return (
    <div className="flex justify-between">
      <img
        src={absmlogo}
        alt="Andrew Bolton Sports Massage logo"
        className="header-logo"
      />
      <div className="flex justify-between self-end">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          Home
        </NavLink>
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
      </div>
    </div>
  )
}

export default NavBar
