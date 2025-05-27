import React from 'react'
import BookingEmbedded from '../components/BookingEmbedded.tsx'
import Mailchimp from '../components/Mailchimp.tsx'
import Slider from '../components/Slider.tsx'
import { Metadata } from 'next'
import Map from '../components/Map.tsx'
import reviewData from '../data/reviews.json'
import GoogleReviewsWidget from '../components/GoogleReviewsWidget.tsx'
import { Review } from '../../models/reviews.ts'
import IntroOfferPrices from './massageprices/introOfferPrices.tsx'
import Prices from './massageprices/prices.tsx'
import BookNowButton from '../components/BookNowButton.tsx'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com',
  },
}

const writeReviewUrl = 'https://g.page/AndrewBoltonSportsMassage/review?gm'

export default function Page() {
  const typedReviews: Review[] = reviewData.map((review) => ({
    ...review,
    // Assert that this specific property matches your 'Review' interface
    starRating: review.starRating as Review['starRating'],
  }))
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
        <BookNowButton />

        <div className="break-line"></div>
      </div>
      <GoogleReviewsWidget
        reviews={typedReviews}
        writeReviewUrl={writeReviewUrl}
      />
      <div className="content-container remove-top-margin">
        <div className="break-line"></div>
        <div className="row">
          <div className="column center">
            <h2 className="p-heading remove-top-margin">Prices</h2>
            <Prices />
          </div>
          <div className="column center">
            <h2 className="p-heading">Intro offer</h2>
            <IntroOfferPrices />
          </div>
        </div>
        <div className="break-line"></div>
      </div>
      <Map page="home" />
      <BookingEmbedded />
      <Mailchimp />
    </div>
  )
}
