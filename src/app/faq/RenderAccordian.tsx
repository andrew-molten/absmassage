'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FAQdata } from '../../../models/mainModels.ts'
import '../../styles/Accordion.scss'

interface Props {
  FAQs: FAQdata[]
  preExpandedUuid?: string
  styleVariant?: 'minimal' | 'sleek' | 'modern-card' // Optional style variants
}

function RenderAccordion({
  FAQs,
  preExpandedUuid,
  styleVariant = 'modern-card',
}: Props) {
  const [openUuid, setOpenUuid] = useState<string | null>(
    preExpandedUuid || null,
  )
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([])

  useEffect(() => {
    // Sync the open state of the details elements with the component's state
    detailsRefs.current.forEach((el, index) => {
      if (el && FAQs[index].uuid === openUuid) {
        el.open = true
      } else if (el) {
        el.open = false
      }
    })
  }, [openUuid, FAQs])

  const handleToggle = (uuid: string, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault() // Prevent the default details toggle behavior
    setOpenUuid((prevUuid) => (prevUuid === uuid ? null : uuid))
  }

  return (
    <div className={`accordion-container ${styleVariant}`}>
      {FAQs.map((item, index) => (
        <details
          key={item.uuid}
          ref={(el) => {
            detailsRefs.current[index] = el
            return
          }}
          className="accordion-item"
          // Set initial open state for the pre-expanded item
          open={item.uuid === preExpandedUuid}
          // The onClick handler ensures only one item is open at a time
          onClick={(e) => handleToggle(item.uuid, e)}
        >
          <summary className="accordion-title">
            {item.question}
            <span className="accordion-arrow"></span>
          </summary>
          <div className="accordion-content">
            {item.answer && <p>{item.answer}</p>}
            {item.answer2 && <p>{item.answer2}</p>}
            {item.answer3 && <p>{item.answer3}</p>}
            {item.link && (
              <Link href={item.link.url} className="font-semibold underline">
                {item.link.text}
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}

export default RenderAccordion
