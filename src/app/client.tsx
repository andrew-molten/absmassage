'use client'

// import React from 'react'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import NavBar from '../components/Nav/NavBar'

const App = dynamic(() => import('../App'), { ssr: false })

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [navHeight, setNavHeight] = useState(41)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  return (
    <>
      {' '}
      <NavBar
        navHeight={navHeight}
        setNavHeight={setNavHeight}
        isSmallScreen={isSmallScreen}
        setIsSmallScreen={setIsSmallScreen}
      />
      <div style={{ marginTop: `${navHeight}px` }}>
        {children}
        {/* <App /> */}
      </div>
    </>
  )
}
