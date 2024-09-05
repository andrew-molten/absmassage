import { NavLink, useLocation } from 'react-router-dom'

interface Props {
  isSmallScreen: boolean
}

function Footer({ isSmallScreen }: Props) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`footer ${isHome && 'no-mt'}`}>
      <div className="row">
        {!isSmallScreen && (
          <div className="flex  w-1/4">
            <p className="mt-2">
              27 Wakatu Ave,
              <br />
              Moncks Bay 8081,
              <br />
              Christchurch NZ
              <br />
              <br />
              02041780923
            </p>
          </div>
        )}
        <div
          className={`flex ${!isSmallScreen && 'w-1/2'} flex-wrap justify-center`}
        >
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
          <NavLink to={'/refund-cancellations'} className="footer-link">
            Refunds & Cancellations
          </NavLink>
          <NavLink to={'/privacy-policy'} className="footer-link">
            Privacy Policy
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
