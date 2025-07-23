'use client'

import { useEffect } from 'react'

export default function GclidTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const gclid = urlParams.get('gclid')
      if (gclid) {
        sessionStorage.setItem('gclid', gclid)

        // Clean up the URL
        const url = new URL(window.location.href)
        url.searchParams.delete('gclid')
        window.history.replaceState({}, '', url.toString())
      }
    }
  }, [])

  return null
}
