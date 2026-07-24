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
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=21%20Laing%20Crescent%2C%20Heathcote%20Valley%2C%20Christchurch%208022%2C%20New%20Zealand&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
