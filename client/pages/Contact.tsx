import BookingEmbedded from '../components/BookingEmbedded'

function Contact() {
  return (
    <>
      <div className="heading-wrapper">
        <h1 className="heading center italic">Contact</h1>
      </div>
      <div className="contact-container">
        <div className="row">
          <div className="column shrink">
            <div className="loc_info center">
              <h3 className="text-xl font-medium">27 Wakatu Ave,</h3>
              <h3 className="text-xl font-medium">Moncks Bay,</h3>
              <h3 className="text-xl font-medium">Christchurch, NZ</h3>
              <p>
                <span className="font-semibold">
                  Open hours: <br />
                </span>
                Monday 9am - 7pm
                <br />
                Tuesday 9am - 5pm
                <br />
                Wednesday 9am - 5pm
                <br />
                Thursday 9am - 7pm
                <br />
                Friday 9am - 5pm
                <br />
              </p>

              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:andrew@andrewboltonsportsmassage.com">
                  andrew@andrewboltonsportsmassage.com
                </a>{' '}
              </p>
              <p>
                {' '}
                <span className="font-semibold">Phone:</span> <br /> 0204 178
                0923
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
                  src="https://maps.google.com/maps?q=27%20wakatu%20ave&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
export default Contact
