import React from 'react'
import BookingEmbedded from '../../components/BookingEmbedded'
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Andrew Bolton Sports Massage',
  description:
    'Get in touch with Andrew Bolton Sports Massage in Christchurch, NZ. Find our contact details, hours of operation, and location on the map. Street parking available.',
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com/contact',
  },
}

function contact() {
  return (
    <>
      <div className="heading-wrapper">
        <h1 className="heading center italic">Contact</h1>
      </div>
      <div className="contact-container">
        <div className="row">
          <div className="column shrink">
            <div className="loc_info">
              <p>
                <span>
                  <FaLocationDot />
                </span>
                21 Laing Crescent,
                <br />
                Heathcote Valley,
                <br />
                Christchurch, NZ
              </p>
              <p>
                <span className="font-semibold">
                  Open hours: <br />
                </span>
                Monday: 9am - 7pm
                <br />
                Tuesday: 9am - 5pm
                <br />
                Wednesday: 9am - 5pm
                <br />
                Thursday: 9am - 7pm
                <br />
                Friday: 9am - 5pm
                <br />
              </p>

              <p>
                <span>
                  <FaEnvelope />
                </span>

                <a
                  href="mailto:andrew@andrewboltonsportsmassage.com "
                  target="_blank"
                  rel="noreferrer"
                >
                  andrew@andrewboltonsportsmassage.com
                </a>
              </p>
              <p>
                <span>
                  <FaPhone />
                </span>{' '}
                <a href="tel:02041780923" target="_blank" rel="noreferrer">
                  {' '}
                  0204 178 0923
                </a>
              </p>

              <p>Plenty of street parking available.</p>
            </div>
          </div>
          <div className="column">
            <div className="mapouter">
              <div className="gmap_canvas">
                {/* responsive google map embed */}
                <iframe
                  title="google map"
                  id="location_gmap_canvas"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=21 laing crescent&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;center=-43.64578000,172.74586000&amp;output=embed"
                ></iframe>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="https://putlocker-is.org"></a>
                <br />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="https://www.embedgooglemap.net"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingEmbedded />
    </>
  )
}
export default contact
