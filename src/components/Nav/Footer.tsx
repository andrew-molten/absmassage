'use client'
import Link from 'next/link'
import absmlogo from '../../../images/logos/andrew-bolton-sports-massage-logo.webp'
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'
import React, { useEffect, useState } from 'react'

function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsSmallScreen(window.innerWidth < 820)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
  }, [])

  const ATTRIBUTION = `
  Icon by fontAwesome from https://fontawesome.com/ & React Icons, licensed under CC BY 4.0 License - https://creativecommons.org/licenses/by/4.0/.
`

  return (
    <div className={`footer`}>
      <div className="row">
        {!isSmallScreen && (
          <div className="twenty-percent flex">
            <Link href={'/'} className="hover-link">
              <img
                className="footer-logo ml-3 mt-2 self-start"
                src={absmlogo.src}
                alt="Andrew Bolton Sports Massage"
              />
            </Link>
          </div>
        )}
        <div
          className={`footer-link-container ${!isSmallScreen && 'forty-percent flex-col'}  `}
        >
          {/* {!isSmallScreen && (
            <h3 className="text-xl font-medium">Navigation</h3>
          )} */}

          <Link href={'/'} className={`footer-link hover-link inline-block `}>
            Home
          </Link>

          <Link
            href={'/massageprices'}
            className={`footer-link hover-link  inline-block  `}
          >
            Massage & Prices
          </Link>
          <Link
            href={'/about'}
            className={`footer-link hover-link  inline-block  `}
          >
            About
          </Link>
          <Link
            href={'/faq'}
            className={`footer-link hover-link  inline-block  `}
          >
            FAQ
          </Link>
          <Link
            href={'/contact'}
            className={`footer-link hover-link  inline-block  `}
          >
            Contact
          </Link>
          <Link
            href={'/refundcancellations'}
            className={`footer-link hover-link  inline-block  `}
          >
            Refunds & Cancellations
          </Link>
          <Link
            href={'/privacypolicy'}
            className={`footer-link hover-link  inline-block  `}
          >
            Privacy Policy
          </Link>
          <a
            className={`footer-link hover-link  inline-block  `}
            href="https://andrew-bolton-massage-and-yoga.cliniko.com/bookings#service"
          >
            Book Now
          </a>
        </div>
        {!isSmallScreen && (
          <div className=" forty-percent flex flex-col flex-wrap content-center">
            {/* <h3 className="text-xl font-medium">Contact</h3> */}
            <p className="hover-link">
              <a
                href="mailto:andrew@andrewboltonsportsmassage.com "
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope /> andrew@andrewboltonsportsmassage.com
              </a>
            </p>

            <p className="hover-link">
              <FaPhone />{' '}
              <a href="tel:02041780923" target="_blank" rel="noreferrer">
                {' '}
                0204 178 0923
              </a>
            </p>
            <p className="hover-link">
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
            <div style={{ display: 'none' }}>{ATTRIBUTION}</div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Footer
