import { FAQs } from '../../data/FAQ.ts'
import RenderAccordian from './RenderAccordian.tsx'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Metadata } from 'next/types/index'

export const metadata: Metadata = {
  title: 'FAQ - Andrew Bolton Sports Massage',
  description:
    'Get answers to common questions about massage therapy, including injury advice, session length, frequency, post-massage exercise, and more. Find out how massage can help your recovery and well-being.',
}

// Adding this as a separate component which can be use Client.

function faq() {
  return (
    <>
      <div className="heading-wrapper">
        <h1 className="heading">Frequently Asked Questions</h1>
      </div>
      <div className="contact-container">
        <RenderAccordian FAQs={FAQs} />
      </div>
    </>
  )
}
export default faq
