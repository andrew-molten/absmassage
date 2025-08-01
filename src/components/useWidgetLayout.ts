import { useCallback, useEffect, useRef, useState } from 'react'
import { themeConfig } from '../lib/widgetTheme'

function useWidgetLayout(totalItems: number, cardBaseWidthPx: number) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToDisplay, setCardsToDisplay] = useState(1)
  const [actualCardWidthPx, setActualCardWidthPx] = useState(cardBaseWidthPx)
  const [cardGapPx, setCardGapPx] = useState(themeConfig.cardGapPx)
  const viewportRef = useRef<HTMLDivElement>(null)

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
    console.log('current: ', current)
    setCardsToDisplay(current)

    if (current > 1) {
      setCardGapPx(themeConfig.cardGapPx)
      const totalGap = (current - 1) * themeConfig.cardGapPx
      const widthForCards = viewportWidth - totalGap
      console.log('widthForCards: ', widthForCards)
      setActualCardWidthPx(Math.max(cardBaseWidthPx, widthForCards / current))
    } else {
      setActualCardWidthPx(themeConfig.oneCardWidthPercentage * viewportWidth)
      console.log(
        'card Width: ',
        themeConfig.oneCardWidthPercentage * viewportWidth,
      )
      setCardGapPx(
        0.5 * (1 - themeConfig.oneCardWidthPercentage) * viewportWidth,
      )
    }
  }, [cardGapPx])

  useEffect(() => {
    // updateLayoutMetrics()
    // window.addEventListener('resize', updateLayoutMetrics)
    // return () => window.removeEventListener('resize', updateLayoutMetrics)
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

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1))
  const handleNext = () =>
    setCurrentIndex((i) => Math.min(i + 1, totalItems - cardsToDisplay))
  const slideOffsetPx = -currentIndex * (actualCardWidthPx + cardGapPx)

  console.log('Widget actual px', actualCardWidthPx)

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
  }
}

export default useWidgetLayout
