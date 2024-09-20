'use client'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { FAQs } from '../../data/FAQ.ts'

import 'react-accessible-accordion/dist/fancy-example.css'
import { FAQdata } from '../../../models/mainModels.ts'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

// export function generateStaticParams() {
//   return [{ slug: ['faq'] }]
// }

function faq() {
  return (
    <>
      <div className="heading-wrapper">
        <h1 className="heading">Frequently Asked Questions</h1>
      </div>
      <div className="contact-container">
        <Accordion allowZeroExpanded preExpanded={['54d302df']}>
          {FAQs.map((item: FAQdata) => (
            <AccordionItem key={item.uuid} uuid={item.uuid}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {item.answer && <p className="mt-0">{item.answer}</p>}
                {item.answer2 && <p>{item.answer2}</p>}
                {item.answer3 && <p>{item.answer3}</p>}
                {item.link && (
                  <Link
                    href={item.link.url}
                    className="font-semibold underline"
                  >
                    {item.link.text}
                  </Link>
                )}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}
export default faq
