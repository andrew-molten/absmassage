import React from 'react'
import '../styles/main.scss'
import '../styles/NavBar.scss'
// import NavBarSSR from '../components/Nav/NavBar'
import dynamic from 'next/dynamic'

const NavBarSSR = dynamic(() => import('../components/Nav/NavBarSSR.tsx'), {
  ssr: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const [navHeight, setNavHeight] = useState(41)
  // const [isSmallScreen, setIsSmallScreen] = useState(false)
  return (
    <html lang="en">
      <head>
        <title>Andrew Bolton Sports Massage</title>
        {/* <link
          rel="icon"
          type="image/webp"
          href="./images/logos/absm-shortcut-icon.webp"
        /> */}
        {/* <link rel="stylesheet" href="./client/styles/main.scss" /> */}
        {/* <link rel="stylesheet" href="./client/styles/NavBar.scss" /> */}
        <meta
          name="description"
          content="Professional, strong & effective massage to relieve your pain and tension now. Become relaxed, rejuvenated & pain free today."
        />
      </head>

      <body>
        <NavBarSSR />

        <div id="root">{children}</div>

        {/* <script src="./client/index.tsx" type="module"></script>
        <script src="./client/cliniko.js" type="module"></script> */}
      </body>
    </html>
  )
}
