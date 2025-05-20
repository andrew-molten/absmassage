import React from 'react'
import BookingEmbedded from '../components/BookingEmbedded.tsx'
import Mailchimp from '../components/Mailchimp.tsx'
import Reviews from '../components/Reviews.tsx'
import Slider from '../components/Slider.tsx'
import { Metadata } from 'next'
import Map from '../components/Map.tsx'
import sampleApiReviews from '../data/reviews.json'
import GoogleReviewsWidget from '../components/GoogleReviewsWidget.tsx'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com',
  },
}

const writeReviewUrl = 'https://g.page/AndrewBoltonSportsMassage/review?gm'

export default function Page() {
  return (
    <div>
      <Slider />
      <div className="content-container">
        <h1 className="text-xl">{`Hi, I’m Andrew.`}</h1>
        <h2>Massaging since 2018.</h2>
        <h2>
          I specialise in{' '}
          <strong>Deep Tissue, Sports, Relaxation, and Prenatal massage</strong>
          .
        </h2>
        {/* <p>Relieve your tension, heal your injuries & find lasting relief!</p>
        <p>{`I'm both strong & sensitive so I have a good sense of the perfect pressure but can always ease off or work deeper when needed. My space is always warm & you will leave feeling lighter than when you came in.`}</p> */}

        {/* <p>
          <strong>{`I use a combination of techniques to help you achieve results, whether that's to:`}</strong>
        </p> */}
        <p>
          Having overcome my own chronic pain with yoga & massage, I'm
          passionate about helping you:
        </p>
        <ul className="ml-5 mt-5 text-left">
          <li>🦵 Overcome injury</li>
          <li className="mt-1">😌 Relieve pain</li>
          <li className="mt-1">💆 Alleviate tension</li>
          <li className="mt-1">🏃‍♂️ Restore mobility</li>
          <li className="mt-1">🚵🏽‍♂️ Prepare for/recover from events</li>
          <li className="mt-1">💆‍♀️ Or just relax</li>
        </ul>

        <p>I use a holistic approach to help release your tension.</p>

        <p>A warm & calm space is key to your relaxation.</p>

        <p>
          I love having a chat! But equally encourage you to experience the
          massage with your breath, allowing your muscles to relax a little more
          with every exhale.
        </p>

        <p>Each session is tailored to your needs, preferences & goals.</p>

        {/* <p>
          {`I'm passionate about helping people live pain-free lives and believe that cultivating balance in our physical & mental well-being is key. I know how challenging it is to find that balance with lives outside of maintenance, so I focus on finding the small things that provide the biggest impact.`}
        </p>

        <p>
          My goal is to help you find lasting relief, but if you love regular
          maintenance massages, you’re always welcome! I tailor each session to
          your preferences, whether you prefer deep tissue work or a lighter
          touch.
        </p> */}
        <div className="break-line"></div>
      </div>
      <div className="reviews-container">
        <GoogleReviewsWidget
          reviews={sampleApiReviews}
          writereviewUrl={writeReviewUrl}
        />
      </div>
      <Reviews />
      <div className="content-container remove-top-margin">
        <div className="break-line"></div>
        <div className="row">
          <div className="column center">
            <h2 className="p-heading remove-top-margin">Prices</h2>
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
      </div>
      <Map page="home" />
      <BookingEmbedded />
      <Mailchimp />
    </div>
  )
}
