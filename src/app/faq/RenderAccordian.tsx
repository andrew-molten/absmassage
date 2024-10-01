'use client'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Link from 'next/link'
import React from 'react'
import { FAQdata } from '../../../models/mainModels.ts'
import 'react-accessible-accordion/dist/fancy-example.css'

interface Props {
  FAQs: FAQdata[]
}

function RenderAccordian({ FAQs }: Props) {
  return (
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
              <Link href={item.link.url} className="font-semibold underline">
                {item.link.text}
              </Link>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default RenderAccordian
