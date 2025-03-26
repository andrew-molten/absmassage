import massageSpace from '../../../images/slider/massage-space.webp'
import andrewMassaging from '../../../images/slider/andrew-massaging.webp'
import neckMassage from '../../../images/slider/Andrew-Bolton-Sports-Massage(sm).webp'
import malasana from '../../../images/andrew/Malasana.webp'
import Reviews from '../../components/Reviews'
import React from 'react'
import BookingEmbedded from '../../components/BookingEmbedded.tsx'

import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Massage & Prices - Andrew Bolton Sports Massage',
  description:
    'Explore professional massage services with options like deep tissue, sports, and relaxing massages. Affordable prices from $55 for 30 minutes to $90 for 60 minutes. Intro offer available. Book now for a personalized experience tailored to your needs.',
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com/massageprices',
  },
}
export default function massageprices() {
  return (
    <div>
      <div className="heading-wrapper">
        <h1 className="heading center italic">Massage</h1>
      </div>
      <div className="content-container">
        <div className="row">
          <div className="column center">
            <h2 className="p-heading">Massage Prices</h2>
            <p>
              30 mins - $60
              <br />
              45 mins - $80
              <br />
              60 mins - $100
              <br />
              75 mins - $120
              <br />
              90 mins - $140
              <br />
              120 mins - $190
            </p>
          </div>
          <div className="column center">
            <h2 className="p-heading">Intro offer</h2>
            <p className="text-xl">
              60 mins - $89
              <br />
              75 mins - $109
              <br />
              90 mins - $129
              <br />
            </p>
          </div>
        </div>

        <div className="break-line"></div>
        <a
          className="book-now-btn"
          href="https://andrew-bolton-massage-and-yoga.cliniko.com/bookings#service"
        >
          Book Now
        </a>

        <div className="break-line"></div>

        <div className="row column-reverse">
          <div className="column">
            <h2 className="p-heading">Deep Tissue Massage</h2>
            <p>
              Firm pressure with slow strokes working deeply to release chronic
              tension.
            </p>
            <p>
              The specific lengthening & deep work into muscles, fascia &
              tendons improves joint movement, tension, posture & overall
              well-being.
            </p>
            <p>Especially effective for persistent tension.</p>
          </div>
          <div className="column image-column">
            <img
              className="col-img"
              src={massageSpace.src}
              alt="Leafy massage space"
            />
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <img
              className="col-img"
              src={andrewMassaging.src}
              alt="Deep Tissue Massage"
            />
          </div>
          <div className="column">
            <h2 className="p-heading">Sports Massage</h2>
            <p>
              More dynamic, combining deep tissue techniques with kneading,
              compressions & circular friction depending on what you need.
            </p>

            <p>
              Used to overcome injury, aid training, increase flexibility &
              relieve tension.
            </p>
            <p>Can reduce fatigue, injury & DOMs.</p>
            <p>
              Beneficial for athletes, active people & anybody with tension.
            </p>
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row column-reverse">
          <div className="column">
            <h2 className="p-heading">Relaxing massage</h2>
            <p>
              A whole-body therapeutic massage using long rhythmic strokes to
              relax your muscles & joints and calm your nervous system.
            </p>
            <p>
              Pressure according to your preference, with relaxing music
              playing. Your choice to chat or go quiet.
            </p>
            <p>Can still focus on particular areas if you like.</p>
          </div>
          <div className="column image-column">
            <img
              className="col-img"
              src={neckMassage.src}
              alt="Calm relaxing massage"
            />
          </div>
        </div>
        <div className="break-line"></div>
      </div>
      <Reviews />

      <BookingEmbedded />
      <div className="content-container">
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <img
              className="col-img"
              src={malasana.src}
              alt="Malasana in nature"
            />
          </div>
          <div className="column">
            <h2 className="p-heading">Private yoga session</h2>

            <p>{`I've been practising yoga since 2010 & teaching since 2016.`}</p>
            <p>
              {`I keep learning from other teachers and movement experts. I've worked with the super flexible and inflexible! With people doing arm balances & beginners mastering the basics.`}
            </p>
            <p>
              {`Depending on what your needs are the practice can be slow and methodical, flowy, strong & powerful, meditative, fast-paced, relaxing, or a combination of styles. `}
            </p>
            <p>
              Learn how to align your body, moving with the breath in a safe way
              to build strength & improve mobility.
            </p>
            <p>Get in touch if you have any questions.</p>
          </div>
        </div>
        <div className="break-line"></div>
      </div>
    </div>
  )
}
