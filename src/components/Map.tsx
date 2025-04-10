'use client'
import React from 'react'
interface Props {
  page: string
}

function Map({ page }: Props) {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        {/* responsive google map embed */}
        <iframe
          title="google map"
          id={`${page}_gmap_canvas`}
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=21 laing crescent&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;center=-43.64578000,172.74586000&amp;output=embed"
          loading="lazy"
        ></iframe>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="https://putlocker-is.org"></a>
        <br />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="https://www.embedgooglemap.net"></a>
      </div>
    </div>
  )
}

export default Map
