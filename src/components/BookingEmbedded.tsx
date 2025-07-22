'use client'
import { useState, useEffect } from 'react'
import '../styles/Booking.scss'
import React from 'react'

function BookingEmbedded() {
  const [height, setHeight] = useState('1000px')

  useEffect(() => {
    const handleIFrameMessage = (e: MessageEvent) => {
      console.log('Enter')
      if (typeof e.data !== 'string') return
      if (e.data.includes('cliniko-bookings-resize')) {
        console.log('resize')
        const newHeight = Number(e.data.split(':')[1])
        setHeight(`${newHeight}px`)
      }
      if (e.data.search('cliniko-bookings-page:confirmed') > -1) {
        var dataLayer = window.dataLayer || (window.dataLayer = [])

        dataLayer.push({
          event: 'clinikoBookingCompleted',
        })
        console.log('datalayer: ', dataLayer)
      }
      if (e.data.includes('cliniko-bookings-page')) {
        console.log('e.data', e.data)
        console.log('includes cliniko-bookings-pag')
        const clinikoBookings = document.getElementById('cliniko-94087596')
        console.log('clinikoBookings', clinikoBookings)
        clinikoBookings!.scrollIntoView()
      }
    }
    window.addEventListener('message', handleIFrameMessage)
    return () => {
      window.removeEventListener('message', handleIFrameMessage)
    }
  }, [])

  return (
    <div className="booking-container">
      <div className="booking-embed">
        <h3 className="booking-heading">
          <em>Book Online</em>
        </h3>
        <iframe
          id="cliniko-94087596"
          title="cliniko-booking"
          src={`https://andrew-bolton-massage-and-yoga.cliniko.com/bookings?embedded=true`}
          width="100%"
          height={height}
          scrolling="auto"
          style={{ pointerEvents: 'auto' }}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default BookingEmbedded
