import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Home
      </NavLink>
    </div>
  )
}

export default NavBar
