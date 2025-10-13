'use client'
import React from 'react'
import '../styles/Slider.scss'
import { sliderImages } from '../../images/slider/sliderImages.js'
import { useRef, useState, useEffect } from 'react'
import { SliderImage } from '../../models/mainModels.ts'
import Dot from './Dot.tsx'

function Slider() {
  const [curSlide, setCurSlide] = useState(1)
  const [imageHeights, setImageHeights] = useState<number[]>([])
  const [minHeight, setMinHeight] = useState(320)
  const [windowWidth, setWindowWidth] = useState(0)
  const slides = useRef<HTMLDivElement[]>([])
  const sliderRef = useRef<HTMLDivElement>(null)
  const numSlides = useRef<number>(0)

  // IMAGE LOAD
  useEffect(() => {
    const images = Array.from(
      document.querySelectorAll('.slide img'),
    ) as HTMLImageElement[]
    let loadedCount = 0

    const checkAllLoaded = () => {
      loadedCount++
      if (loadedCount === 3 || loadedCount === images.length) {
        const loadedHeights = images.map(
          (image) => (image as HTMLImageElement).offsetHeight,
        )
        setImageHeights(loadedHeights)
        numSlides.current = images.length
      }
    }

    setWindowWidth(window.innerWidth)

    // Attach load event listeners to images
    images.forEach((image) => {
      if ((image as HTMLImageElement).complete) {
        checkAllLoaded() // If image already loaded
      } else {
        ;(image as HTMLImageElement).onload = checkAllLoaded
      }
    })

    // WINDOW RESIZE HANDLING
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      checkAllLoaded()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  useEffect(() => {
    // SLIDER HEIGHT UPDATE
    if (imageHeights.length > 0) {
      const min = Math.min(...imageHeights)
      if (min > 0) {
        setMinHeight(min)
      }
    }
  }, [imageHeights])

  // Timed swipe
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3500)
    return () => clearInterval(interval)
  }, [curSlide])

  // SWIPE
  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart)
      slider.addEventListener('touchend', handleTouchEnd)
    }
    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart)
        slider.removeEventListener('touchend', handleTouchEnd)
      }
    }
  })

  let touchstartX: number
  const handleTouchStart = (e: TouchEvent) => {
    touchstartX = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    const touchendX = e.changedTouches[0].screenX
    // SWIPE LEFT
    if (touchendX < touchstartX) {
      nextSlide()
      // SWIPE RIGHT
    } else if (touchstartX < touchendX) {
      prevSlide()
    }
  }

  function prevSlide() {
    if (curSlide === 1) return setCurSlide(7)
    setCurSlide(curSlide - 1)
  }

  function nextSlide() {
    if (curSlide === 7) return setCurSlide(1)
    setCurSlide(curSlide + 1)
  }

  function checkActive(num: number) {
    if (num === curSlide) return 'active'
  }

  function getSlideClass(index: number) {
    if (
      curSlide === index ||
      (curSlide - (numSlides.current - 2) === index &&
        windowWidth < 900 &&
        windowWidth > 600)
    )
      return 'sl2 vis'
    if (curSlide + 1 === index) return 'sl3 vis'
    if (curSlide - 1 === index) return 'sl1 vis'
    if (curSlide + 4 === index && windowWidth < 900 && windowWidth > 600)
      return 'sl-1'
    if (curSlide - 4 === index && windowWidth < 900 && windowWidth > 600)
      return 'sl4'
    if (
      curSlide - 1 > index ||
      (curSlide + (numSlides.current - 2) === index &&
        windowWidth < 900 &&
        windowWidth > 600)
    )
      return 'sl0 vis'
    if (curSlide + 1 < index) return 'sl4 vis'
    else return ''
  }

  return (
    <div
      className="slider"
      style={{
        height: `${minHeight || 320}px`,
      }}
      ref={sliderRef}
    >
      {sliderImages.map((image: SliderImage, index: number) => (
        // generate each slide
        <div
          key={`${index}+${image.image}`}
          className={`slide ${getSlideClass(index)}`}
          ref={(el) => {
            if (el) {
              slides.current[index] = el
            }
          }}
        >
          <img src={image.image.src} alt={image.alt} loading={'eager'} />
        </div>
      ))}

      <div className="dots" id="dotsID">
        {sliderImages.map((image: SliderImage, index: number) =>
          index < sliderImages.length - 2 ? (
            <Dot
              key={`dot${index}`}
              number={index + 1}
              checkActive={checkActive}
              setCurSlide={setCurSlide}
            />
          ) : (
            windowWidth < 900 && (
              <Dot
                key={`dot${index}`}
                number={index + 1}
                checkActive={checkActive}
                setCurSlide={setCurSlide}
              />
            )
          ),
        )}
      </div>
    </div>
  )
}
export default Slider
