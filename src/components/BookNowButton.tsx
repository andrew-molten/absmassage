'use client'

import { useEffect, useState } from 'react'

interface Props {
  className: string
}

export default function BookNowButton({ className }: Props) {
  const [link, setLink] = useState(
    'https://andrew-bolton-massage-and-yoga.cliniko.com/bookings',
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const gclid = sessionStorage.getItem('gclid')
      if (gclid) {
        setLink(
          `https://andrew-bolton-massage-and-yoga.cliniko.com/bookings?gclid=${gclid}`,
        )
      }
    }
  }, [])

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Book Now
    </a>
  )
}
