import React from 'react'
import '../styles/main.scss'
import '../styles/NavBar.scss'
// import NavBarSSR from '../components/Nav/NavBar'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Raleway } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Sports Massage Christchurch | Deep Tissue Therapy | Andrew Bolton',
  description:
    "Sports & Deep Tissue Massage for serious pain relief. I'm an experienced therapist helping athletes & active people recover faster. Book now - from $89",
  robots: 'index, follow',
}

const NavBarSSR = dynamic(() => import('../components/Nav/NavBarSSR.tsx'), {
  ssr: true,
})

const Footer = dynamic(() => import('../components/Nav/Footer.tsx'), {
  ssr: true,
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // choose weights you use
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
      <GoogleTagManager gtmId="GTM-PSTX555" />

      <body>
        <NavBarSSR />

        <div id="root">{children}</div>
        <Analytics />
        <SpeedInsights />
        <Footer />

        {/* <script src="./client/index.tsx" type="module"></script> */}
        <script src="./client/cliniko.js" type="module"></script>
      </body>
    </html>
  )
}
