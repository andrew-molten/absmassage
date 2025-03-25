import React from 'react'
import BookingEmbedded from '../components/BookingEmbedded.tsx'
import Mailchimp from '../components/Mailchimp.tsx'
import Reviews from '../components/Reviews.tsx'
import Slider from '../components/Slider.tsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com',
  },
}

export default function Page() {
  return (
    <div>
      <Slider />
      <div className="content-container">
        <h1>{`Hi, I’m Andrew, I have 6 years of massage experience. I specialise in Deep Tissue, Sports, Relaxation, and Prenatal massage.`}</h1>
        <p>Relieve your tension, heal your injuries & find lasting relief!</p>
        <p>{`I'm both strong & sensitive so I have a good sense of the perfect pressure but can always ease off or work deeper when needed. My space is always warm & you will leave feeling lighter than when you came in.`}</p>

        <p>
          <strong>{`I use a combination of techniques to help you achieve results, whether that's to:`}</strong>
        </p>
        <ul className="ml-5 text-left">
          <li>🦵 Overcome injury</li>
          <li>😌 Relieve pain</li>
          <li>🙌 Release soft tissue</li> <li>💆 Alleviate tension</li>
          <li>🏃‍♂️ Restore freedom of movement</li>
          <li>🚵🏽‍♂️ Prepare for or recover from an event</li>
          <li>💆‍♀️ Or simply to relax</li>
        </ul>

        <p>
          {`I'm passionate about helping people live pain-free lives and believe that cultivating balance in our physical & mental well-being is key. I know how challenging it is to find that balance with lives outside of maintenance, so I focus on finding the small things that provide the biggest impact.`}
        </p>

        <p>
          My goal is to help you find lasting relief, but if you love regular
          maintenance massages, you’re always welcome! I tailor each session to
          your preferences, whether you prefer deep tissue work or a lighter
          touch.
        </p>
        <div className="break-line"></div>
      </div>
      {/* google-review-rating */}
      <Reviews />
      {/* Online Booking */}
      <BookingEmbedded />
      {/* <Mailchimp /> */}
      <Mailchimp />
    </div>
  )
}
