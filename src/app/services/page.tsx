import React from 'react'
import massageSpace from '../../../images/slider/massage-space.webp'
import andrewMassaging from '../../../images/slider/andrew-massaging.webp'
import neckMassage from '../../../images/slider/Andrew-Bolton-Sports-Massage(sm).webp'
import malasana from '../../../images/andrew/Malasana.webp'
import BookingEmbedded from '../../components/BookingEmbedded.tsx'
import reviewData from '../../data/reviews.json'
import { Review } from '../../../models/reviews.ts'
import IntroOfferPrices from './introOfferPrices.tsx'
import Prices from './prices.tsx'
import Image from 'next/image'
import BookNowButton from '../../components/BookNowButton.tsx'

import { Metadata } from 'next/types'
import GoogleReviewsWidget from '../../components/GoogleReviewsWidget.tsx'

export const metadata: Metadata = {
  title:
    'Massage Services Christchurch | Sports & Deep Tissue Massage | Andrew Bolton',
  description:
    'Professional sports & deep tissue massage in Christchurch. Experienced therapist helping athletes & active people recover faster. From $80 - book now.',
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com/services',
  },
}
const writeReviewUrl = 'https://g.page/AndrewBoltonSportsMassage/review?gm'
export default function services() {
  const typedReviews: Review[] = reviewData.map((review) => ({
    ...review,
    starRating: review.starRating as Review['starRating'],
  }))
  return (
    <div>
      <div className="heading-wrapper">
        <h1 className="heading center sr-only italic">
          Professional Sports & Deep Tissue Massage in Christchurch
        </h1>
        <h2 className="center heading mt-0 italic">Massage Services</h2>
      </div>
      <div className="content-container">
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
            <p>Popular with Christchurch athletes, tradies & desk jockeys.</p>
          </div>
          <div className="column image-column">
            <Image
              className="col-img"
              src={massageSpace}
              alt="Professional massage therapy room in Christchurch"
              fill={false}
              width={270}
              height={206}
              priority
            />
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <Image
              className="col-img"
              src={andrewMassaging}
              alt="Deep tissue massage therapy session in Christchurch"
              width={270}
              height={206}
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
              Beneficial for athletes, active people & anybody with tension
              across Christchurch.
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
            <Image
              className="col-img"
              src={neckMassage}
              alt="Relaxing sports massage treatment Christchurch"
              width={270}
              height={206}
            />
          </div>
        </div>
        <div className="break-line"></div>
      </div>
      <h2 className="p-heading ">Pricing & Booking</h2>
      <div className="row  items-center">
        <div className="column center">
          <h3 className="text-3xl">Intro offer</h3>
          <IntroOfferPrices />
        </div>
        <div className="column center">
          <h3 className="mt-8 text-3xl sm:mt-0">Follow up</h3>
          <Prices />
        </div>
      </div>

      <div className="break-line"></div>
      <BookNowButton className="book-now-btn" />
      {/* <a
        className="book-now-btn"
        href="https://andrew-bolton-massage-and-yoga.cliniko.com/bookings#service"
      >
        Book Now
      </a> */}
      <div className="break-line"></div>

      <GoogleReviewsWidget
        reviews={typedReviews}
        writeReviewUrl={writeReviewUrl}
      />

      <BookingEmbedded />
      <div className="content-container">
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <Image
              className="col-img"
              src={malasana}
              alt="Andrew Bolton massage therapist practicing yoga in nature"
              width={270}
              height={206}
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
