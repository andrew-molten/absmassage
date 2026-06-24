import { FAQs } from '../../data/FAQ.ts'
import RenderAccordian from './RenderAccordian.tsx'

import React from 'react'
import { Metadata } from 'next/types/index'

export const metadata: Metadata = {
  title: 'FAQ - Andrew Bolton Sports Massage',
  description:
    'Get answers to common questions about massage therapy, including injury advice, session length, frequency, post-massage exercise, and more. Find out how massage can help your recovery and well-being.',
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com/faq',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: [item.answer, item.answer2, item.answer3, item.link?.text]
        .filter(Boolean)
        .join(' '),
    },
  })),
}

// Adding this as a separate component which can be use Client.

function faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <div className="heading-wrapper">
        <h1 className="heading">Frequently Asked Questions</h1>
      </div>
      <div className="faq-container">
        <RenderAccordian FAQs={FAQs} />
      </div>
    </>
  )
}
export default faq
