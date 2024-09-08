import { NavLink } from 'react-router-dom'
import absmlogo from '../../../images/logos/andrew-bolton-sports-massage-logo.webp'
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'

interface Props {
  isSmallScreen: boolean
}

function Footer({ isSmallScreen }: Props) {
  const ATTRIBUTION = `
  Icon by fontAwesome from https://fontawesome.com/ & React Icons, licensed under CC BY 4.0 License - https://creativecommons.org/licenses/by/4.0/.
`

  return (
    <div className={`footer`}>
      <div className="row">
        {!isSmallScreen && (
          <div className="flex w-1/4">
            <img
              className="footer-logo ml-3 mt-2 self-start"
              src={absmlogo}
              alt="Andrew Bolton Sports Massage"
            />
          </div>
        )}
        <div
          className={`flex ${!isSmallScreen && 'w-1/3 flex-col'}  flex-wrap justify-center`}
        >
          {!isSmallScreen && (
            <h3 className="text-xl font-medium">Navigation</h3>
          )}

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
        {!isSmallScreen && (
          <div className="mt-2 flex w-2/5 flex-col flex-wrap content-center">
            <h3 className="text-xl font-medium">Contact</h3>
            <p>
              <a
                href="mailto:andrew@andrewboltonsportsmassage.com "
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope /> andrew@andrewboltonsportsmassage.com
              </a>
            </p>
            <p>
              <FaPhone />{' '}
              <a href="tel:02041780923" target="_blank" rel="noreferrer">
                {' '}
                0204 178 0923
              </a>
            </p>
            <p>
              <FaLocationDot />
              <a
                href="https://www.google.co.nz/maps/place/Andrew+Bolton+Sports+Massage/@-43.5663084,172.7386475,17z/data=!3m1!4b1!4m6!3m5!1s0x6d318ba023d35463:0xb55caf2c88c66b0b!8m2!3d-43.5663084!4d172.7412224!16s%2Fg%2F11hd_jz1ld?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                27 Wakatu Ave,
                <br />
                Moncks Bay 8081,
                <br />
                Christchurch NZ
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Footer
