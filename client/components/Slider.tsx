import '../styles/Slider.scss'
import { sliderImages } from '../../images/slider/sliderImages.ts'
import { useRef, useState, useEffect } from 'react'
import { SliderImage } from '../../models/mainModels.ts'
import Dot from './Dot.tsx'

function Slider() {
  const [curSlide, setCurSlide] = useState(1)
  const [imageHeights, setImageHeights] = useState<number[]>([])
  const [minHeight, setMinHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const slides = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const images = document.querySelectorAll('.slide img')
    const heights: number[] = []
    setWindowWidth(window.innerWidth)

    images.forEach((image) => {
      ;(image as HTMLImageElement).onload = () => {
        heights.push((image as HTMLImageElement).offsetHeight)
        setImageHeights(heights)
      }
    })

    const handleResize = () => {
      const newHeights = Array.from(images).map(
        (image) => (image as HTMLImageElement).offsetHeight,
      )
      setImageHeights(newHeights)
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (imageHeights.length > 0) {
      const min = Math.min(...imageHeights)
      setMinHeight(min)
    }
  }, [imageHeights])
  // const sliderRef = useRef<HTMLDivElement>(null)
  // let touchstartX
  // const handleTouchStart = (e: TouchEvent) => {
  //   const touchstartX = e.changedTouches[0].screenX
  //   // store the touchstartX value in a state or ref
  //   console.log(touchstartX)
  // }

  // const handleTouchMove = (e: TouchEvent) => {
  //   const touchmoveX = e.changedTouches[0].screenX
  //   // calculate the difference between touchmoveX and touchstartX
  //   // to determine the direction of the swipe
  // }

  // const handleTouchEnd = (e: TouchEvent) => {
  //   const touchendX = e.changedTouches[0].screenX
  //   // calculate the difference between touchendX and touchstartX
  //   // to determine the direction of the swipe
  //   if (touchendX < touchstartX) {
  //     // swipe to the left
  //     nextSlide()
  //   } else if (touchstartX < touchendX) {
  //     // swipe to the right
  //     prevSlide()
  //   }
  // }

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     sliderRef.current.addEventListener('touchstart', handleTouchStart)
  //     sliderRef.current.addEventListener('touchmove', handleTouchMove)
  //     sliderRef.current.addEventListener('touchend', handleTouchEnd)
  //   }
  //   return () => {
  //     if (sliderRef.current) {
  //       sliderRef.current.removeEventListener('touchstart', handleTouchStart)
  //       sliderRef.current.removeEventListener('touchmove', handleTouchMove)
  //       sliderRef.current.removeEventListener('touchend', handleTouchEnd)
  //     }
  //   }
  // }, [])

  // function handleSliderSwipe() {
  //   if (touchendX < touchstartX) nextSlide()
  //   if (touchstartX < touchendX) prevSlide()
  // }

  // slider.addEventListener('touchstart', (e) => {
  //   touchstartX = e.changedTouches[0].screenX
  // })
  // slider.addEventListener('touchend', (e) => {
  //   touchendX = e.changedTouches[0].screenX
  //   handleSliderSwipe()
  // })

  // function adjustForScreenSize() {
  //   if (x.matches) {
  //     dotsID.insertAdjacentHTML(
  //       'beforeend',
  //       `<span class="dot" data-slide="6"></span>
  //     <span class="dot" data-slide="7"></span>`,
  //     )
  //   }
  //   const dots = document.querySelectorAll('.dot')
  //   return dots
  // }

  function checkActive(num: number) {
    if (num === curSlide) return 'active'
  }

  function getSlideClass(index: number) {
    if (
      curSlide === index ||
      (curSlide - 5 === index && windowWidth < 900 && windowWidth > 600)
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
      (curSlide + 5 === index && windowWidth < 900 && windowWidth > 600)
    )
      return 'sl0 vis'
    if (curSlide + 1 < index) return 'sl4 vis'
    else return ''
  }

  return (
    <div className="slider" style={{ maxHeight: `${minHeight}px` }}>
      {sliderImages.map((image: SliderImage, index: number) => (
        // generate each slide
        <div
          key={`${index}+${image.image}`}
          className={`slide ${getSlideClass(index)}`}
          ref={(el) => (slides.current[index] = el!)}
        >
          <img src={image.image} alt={image.alt} />
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
