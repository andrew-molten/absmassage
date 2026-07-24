'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import heroPoster from '../../images/slider/lower-back.webp'
import BookNowButton from './BookNowButton'

const desktopQuery = '(min-width: 801px)'
const reducedMotionQuery = '(prefers-reduced-motion: reduce)'
const mobilePoster = '/videos/absm-website-hero-mobile-720x960.webp'

type VideoVariant = 'desktop' | 'mobile' | null

export default function VideoHero() {
  const [videoVariant, setVideoVariant] = useState<VideoVariant>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    const desktopMedia = window.matchMedia(desktopQuery)
    const reducedMotionMedia = window.matchMedia(reducedMotionQuery)

    const updateVideoPreference = () => {
      setIsVideoReady(false)
      setVideoVariant(
        reducedMotionMedia.matches
          ? null
          : desktopMedia.matches
            ? 'desktop'
            : 'mobile',
      )
    }

    updateVideoPreference()
    desktopMedia.addEventListener('change', updateVideoPreference)
    reducedMotionMedia.addEventListener('change', updateVideoPreference)

    return () => {
      desktopMedia.removeEventListener('change', updateVideoPreference)
      reducedMotionMedia.removeEventListener('change', updateVideoPreference)
    }
  }, [])

  return (
    <section className="video-hero" aria-labelledby="home-hero-title">
      <div className="video-hero__media" aria-hidden="true">
        <picture>
          <source media="(max-width: 800px)" srcSet={mobilePoster} />
          <Image
            src={heroPoster}
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="video-hero__poster"
          />
        </picture>
        {videoVariant && (
          <video
            key={videoVariant}
            className={`video-hero__video${isVideoReady ? ' video-hero__video--ready' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={videoVariant === 'mobile' ? mobilePoster : heroPoster.src}
            onCanPlay={() => setIsVideoReady(true)}
          >
            {videoVariant === 'mobile' ? (
              <>
                <source
                  src="/videos/absm_website_hero_mobile_landscape-cadence_720x960_v3.webm"
                  type="video/webm"
                />
                <source
                  src="/videos/absm-website-hero-mobile-720x960.mp4"
                  type="video/mp4"
                />
              </>
            ) : (
              <source
                src="/videos/absm-website-hero-1440x600.mp4"
                type="video/mp4"
              />
            )}
          </video>
        )}
      </div>
      <div className="video-hero__shade" aria-hidden="true" />

      <div className="video-hero__content">
        <div className="video-hero__title-group">
          <p className="video-hero__eyebrow">Christchurch · Heathcote Valley</p>
          <h1 id="home-hero-title">Sports &amp; Deep Tissue Massage</h1>
          <p className="video-hero__promise">
            Move better. Relieve pain. Relax deeply.
          </p>
        </div>
        <div className="video-hero__action-group">
          <BookNowButton
            className="video-hero__button"
            text="Book Your Massage"
          />
        </div>
      </div>
    </section>
  )
}
