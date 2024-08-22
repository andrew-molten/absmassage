import '../styles/Slider.scss'
import { sliderImages } from '../../images/slider/sliderImages.ts'
import { useRef, useState } from 'react'
import { SliderImage } from '../../models/mainModels.ts'

function Slider() {
  const [curSlide, setCurSlide] = useState(1)
  const slides = useRef<HTMLDivElement[]>([])

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
    if (curSlide === index) return 'sl2 vis'
    if (curSlide + 1 === index) return 'sl3 vis'
    if (curSlide - 1 === index) return 'sl1 vis'
    if (curSlide - 1 > index) return 'sl0 vis'
    if (curSlide + 1 < index) return 'sl4 vis'
    else return ''
  }

  return (
    <div className="slider">
      {sliderImages.map((image: SliderImage, index: number) => (
        <div
          key={`${index}+${image.image}`}
          className={`slide ${getSlideClass(index)}`}
          ref={(el) => (slides.current[index] = el!)}
        >
          <img src={image.image} alt={`Add alt to the object array`} />
        </div>
      ))}

      <div className="dots" id="dotsID">
        <button
          className={`dot ${checkActive(1)}`}
          onClick={() => setCurSlide(1)}
        ></button>
        <button
          className={`dot ${checkActive(2)}`}
          onClick={() => setCurSlide(2)}
        ></button>
        <button
          className={`dot ${checkActive(3)}`}
          onClick={() => setCurSlide(3)}
        ></button>
        <button
          className={`dot ${checkActive(4)}`}
          onClick={() => setCurSlide(4)}
        ></button>
        <button
          className={`dot ${checkActive(5)}`}
          onClick={() => setCurSlide(5)}
        ></button>
      </div>
    </div>
  )
}
export default Slider
