import { useCallback, useEffect, useRef, useState } from 'react'
import { themeConfig } from '../lib/widgetTheme'

const AUTOPLAY_INTERVAL_MS = 6500

function useWidgetLayout(totalItems: number, cardBaseWidthPx: number) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToDisplay, setCardsToDisplay] = useState(1)
  const [actualCardWidthPx, setActualCardWidthPx] = useState(cardBaseWidthPx)
  const [cardGapPx, setCardGapPx] = useState(themeConfig.cardGapPx)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocusWithin, setHasFocusWithin] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)
  const touchstartXRef = useRef(0)

  // Observe whether slider is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.75 }, // 75% of slider needs to be visible
    )

    const viewport = viewportRef.current

    if (viewport) {
      observer.observe(viewport)
    }

    return () => {
      if (viewport) observer.unobserve(viewport)
    }
  }, [])

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    const updateReducedMotionPreference = () => {
      setPrefersReducedMotion(reducedMotionQuery.matches)
    }

    updateReducedMotionPreference()
    reducedMotionQuery.addEventListener('change', updateReducedMotionPreference)

    return () => {
      reducedMotionQuery.removeEventListener(
        'change',
        updateReducedMotionPreference,
      )
    }
  }, [])

  const updateLayoutMetrics = useCallback(() => {
    if (!viewportRef.current) return
    const viewportWidth = viewportRef.current.offsetWidth
    let maxCards = 1
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) maxCards = 4
      else if (window.innerWidth >= 760) maxCards = 3
      else if (window.innerWidth >= 450) maxCards = 2
    }

    const cardWithGap = cardBaseWidthPx + cardGapPx
    const fitCards = Math.floor(viewportWidth / cardWithGap)
    const current = Math.max(1, Math.min(fitCards, maxCards))
    setCardsToDisplay(current)

    if (current > 1) {
      setCardGapPx(themeConfig.cardGapPx)
      const totalGap = (current - 1) * themeConfig.cardGapPx
      const widthForCards = viewportWidth - totalGap
      setActualCardWidthPx(Math.max(cardBaseWidthPx, widthForCards / current))
    } else {
      setActualCardWidthPx(themeConfig.oneCardWidthPercentage * viewportWidth)
      setCardGapPx(
        0.5 * (1 - themeConfig.oneCardWidthPercentage) * viewportWidth,
      )
    }
  }, [cardBaseWidthPx, cardGapPx])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalItems - cardsToDisplay
      }
      return prevIndex - 1
    })
  }, [cardsToDisplay, totalItems])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < totalItems - cardsToDisplay) {
        return prevIndex + 1
      }
      return 0
    })
  }, [cardsToDisplay, totalItems])

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setIsTouching(true)
    touchstartXRef.current = e.changedTouches[0].screenX
  }, [])

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      const touchendX = e.changedTouches[0].screenX
      // SWIPE LEFT
      if (touchendX < touchstartXRef.current) {
        handleNext()
        // SWIPE RIGHT
      } else {
        handlePrev()
      }
      setIsTouching(false)
    },
    [handleNext, handlePrev],
  )

  const handleTouchCancel = useCallback(() => {
    setIsTouching(false)
  }, [])

  useEffect(() => {
    const tryUpdate = () => {
      if (viewportRef.current?.offsetWidth) {
        updateLayoutMetrics()
      } else {
        // Try again in next frame
        requestAnimationFrame(tryUpdate)
      }
    }

    tryUpdate()
    window.addEventListener('resize', updateLayoutMetrics)
    return () => window.removeEventListener('resize', updateLayoutMetrics)
  }, [updateLayoutMetrics])

  useEffect(() => {
    if (totalItems > 0 && cardsToDisplay > 0) {
      const maxIndex = Math.max(0, totalItems - cardsToDisplay)
      if (currentIndex > maxIndex) setCurrentIndex(maxIndex)
    } else if (totalItems === 0) {
      setCurrentIndex(0)
    }
  }, [cardsToDisplay, totalItems, currentIndex])

  const slideOffsetPx = -currentIndex * (actualCardWidthPx + cardGapPx)
  const isPaused = isHovered || hasFocusWithin || isTouching

  // Advance only while the slider is visible and the visitor is not interacting.
  useEffect(() => {
    if (
      !isVisible ||
      isPaused ||
      prefersReducedMotion ||
      totalItems <= cardsToDisplay
    ) {
      return
    }

    const interval = setInterval(handleNext, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [
    cardsToDisplay,
    handleNext,
    isPaused,
    isVisible,
    prefersReducedMotion,
    totalItems,
  ])

  // Pause autoplay while visitors read or interact, and support touch swiping.
  useEffect(() => {
    const slider = viewportRef.current
    if (!slider) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    const handleFocusIn = () => setHasFocusWithin(true)
    const handleFocusOut = (event: FocusEvent) => {
      if (!slider.contains(event.relatedTarget as Node | null)) {
        setHasFocusWithin(false)
      }
    }

    slider.addEventListener('mouseenter', handleMouseEnter)
    slider.addEventListener('mouseleave', handleMouseLeave)
    slider.addEventListener('focusin', handleFocusIn)
    slider.addEventListener('focusout', handleFocusOut)
    slider.addEventListener('touchstart', handleTouchStart)
    slider.addEventListener('touchend', handleTouchEnd)
    slider.addEventListener('touchcancel', handleTouchCancel)

    return () => {
      slider.removeEventListener('mouseenter', handleMouseEnter)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      slider.removeEventListener('focusin', handleFocusIn)
      slider.removeEventListener('focusout', handleFocusOut)
      slider.removeEventListener('touchstart', handleTouchStart)
      slider.removeEventListener('touchend', handleTouchEnd)
      slider.removeEventListener('touchcancel', handleTouchCancel)
    }
  }, [handleTouchCancel, handleTouchEnd, handleTouchStart])

  return {
    viewportRef,
    currentIndex,
    setCurrentIndex,
    handlePrev,
    handleNext,
    canShowPrev: currentIndex > 0,
    canShowNext: totalItems > 0 && currentIndex < totalItems - cardsToDisplay,
    cardsToDisplay,
    actualCardWidthPx,
    cardGapPx,
    slideOffsetPx,
    prefersReducedMotion,
  }
}

export default useWidgetLayout
