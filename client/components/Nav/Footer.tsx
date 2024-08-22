import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <NavLink to={'/'} className="footer-link">
            Home
          </NavLink>
          <NavLink to={'/massage-&-prices'} className="footer-link">
            Massage & Prices
          </NavLink>
          <NavLink to={'/about'} className="footer-link">
            About
          </NavLink>
          <NavLink to={'/faq'} className="footer-link">
            FAQ
          </NavLink>
          <NavLink to={'/contact'} className="footer-link">
            Contact
          </NavLink>
          <a
            className="footer-link"
            href="https://andrew-bolton-massage-and-yoga.cliniko.com/bookings#service"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
