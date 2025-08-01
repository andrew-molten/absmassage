import React from 'react'
import BookingEmbedded from '../components/BookingEmbedded.tsx'
import Mailchimp from '../components/Mailchimp.tsx'
import Slider from '../components/Slider.tsx'
import { Metadata } from 'next'
import Map from '../components/Map.tsx'
import reviewData from '../data/reviews.json'
import GoogleReviewsWidget from '../components/GoogleReviewsWidget.tsx'
import { Review } from '../../models/reviews.ts'
import Prices from './services/prices.tsx'
import BookNowButton from '../components/BookNowButton.tsx'
import { BlogWidget } from '../components/BlogWidget'
import { getPosts } from '../lib/getBlogPosts'

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
  const posts = getPosts()

  return (
    <div>
      <Slider />
      <div className="content-container">
        <h1 className="sr-only">
          Professional Sports & Deep Tissue Massage in Christchurch
        </h1>
        <h2 className="text-center text-2xl sm:text-3xl">
          <strong>Move better. Relieve pain. Relax deeply.</strong>
        </h2>
        <span className="mt-6 inline-block text-xl">{`Hi, I’m Andrew.`}</span>
        <h2>
          I have 7 years experience specialising in{' '}
          <strong>Deep Tissue & Sports massage in Christchurch</strong>.
        </h2>

        <p>I help people:</p>
        <ul className="ml-5 mt-5 text-left">
          <li>
            <strong>🦵 Overcome injury</strong>
          </li>
          <li className="mt-1">
            <strong>😌 Relieve pain</strong>
          </li>
          <li className="mt-1">
            <strong>💆 Alleviate tension</strong>
          </li>
          <li className="mt-1">
            <strong>🏃‍♂️ Restore mobility</strong>
          </li>
          <li className="mt-1">
            <strong>🚵🏽‍♂️ Prepare for/recover from events</strong>
          </li>
          <li className="mt-1">
            <strong>💆‍♀️ Relax</strong>
          </li>
        </ul>

        <p>I'm passionate about helping people live pain-free lives.</p>

        <p>
          I work holistically with body & breath to release tension. Each
          session is tailored to your preferences, whether you prefer strong
          deep tissue work, a lighter touch or something in between. My clients
          often say that they've struggled to find someone with my strength &
          sensitivity.
        </p>

        <p>
          I'm happy to chat, but appreciate that you get more from your massage
          by sinking into your breath & relaxing.
        </p>

        <BookNowButton className="book-now-btn" text="Book Your Massage" />

        <div className="break-line"></div>
      </div>
      <GoogleReviewsWidget
        reviews={typedReviews}
        writeReviewUrl={writeReviewUrl}
      />
      <div className="content-container remove-top-margin">
        <div className="break-line"></div>
        <h2 className="p-heading ">Pricing</h2>

        <div className="row items-center">
          <div className="column center">
            <Prices />
          </div>
        </div>
        <div className="break-line"></div>
      </div>
      <Map page="home" />
      <BookingEmbedded />
      <BlogWidget posts={posts} />
      <Mailchimp />
    </div>
  )
}
