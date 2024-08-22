import '../styles/Slider.scss'
import { sliderImages } from '../../images/slider/sliderImages.ts'
import { useState } from 'react'

function Slider() {
  const [curSlide, setCurSlide] = useState(1)
  // const moveslides = function (s, i) {
  //   s.style.visibility = 'visible'
  //   s.style.transition = 'transform 1s'
  //   s.style.transform = `translateX(${100 * (i - curSlide)}%)`
  // }

  // // Trying to fix the slides so they don't fan out when you push a button
  // const init = function () {
  //   // Spread slides out
  //   slides.forEach(function (s, i) {
  //     if (s.classList.contains('vis')) {
  //       return
  //     }
  //     s.style.transform = `translateX(${100 * i - curSlide}%)`
  //     setTimeout(() => {
  //       s.style.visibility = 'visible'
  //       // s.style.transition = "transform 1s";
  //     }, 1000)
  //   })
  //   centerButtons()
  //   addDotListeners()
  // }

  // const lastSlideNumber = function () {
  //   if (x.matches) {
  //     return 7
  //   } else return 5
  // }

  // const goToSlide = function (slide) {
  //   slides.forEach(function (s, i) {
  //     if (slide > -1 && slide < lastSlideNumber()) {
  //       moveslides(s, i)
  //     } else if (slide <= -1) {
  //       curSlide = lastSlideNumber() - 1
  //       moveslides(s, i)
  //     } else if (slide >= lastSlideNumber()) {
  //       curSlide = 0
  //       moveslides(s, i)
  //     }
  //   })
  // }

  // const nextSlide = function () {
  //   deactivateDot()
  //   setCurSlide(curSlide + 1)
  //   goToSlide(curSlide)
  //   activateDot()
  // }
  // const prevSlide = function () {
  //   deactivateDot()
  //   setCurSlide(curSlide - 1)
  //   goToSlide(curSlide)
  //   activateDot()
  // }

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

  //Center slide buttons vertically
  // let slideHeight
  // const calcImgHeight = function () {
  //   const shortestImageHeight = Array.from(slides).reduce((prev, current) => {
  //     return prev.clientHeight < current.clientHeight
  //       ? prev.clientHeight
  //       : current.clientHeight
  //   })
  //   if (shortestImageHeight === 0 && x.matches) {
  //     return (slideHeight = 320)
  //   }
  //   if (shortestImageHeight === 0) return (slideHeight = 286)
  //   else {
  //     slideHeight = shortestImageHeight
  //   }
  // }

  // const adjustSliderHeight = function () {
  //   slider.style.height = slideHeight + 'px'
  // }

  // const centerButtons = function () {
  //   calcImgHeight()
  //   adjustSliderHeight()

  // }

  // init()

  // window.addEventListener('resize', adjustSliderHeight)

  // DOTS
  // function addDotListeners() {
  //   dots.forEach((dot, index) => {
  //     dot.addEventListener('click', () => {
  //       setSlide(index)
  //     })
  //   })
  // }
  // const setSlide = function (slideNumber) {
  //   deactivateDot()
  //   setCurSlide(slideNumber)
  //   goToSlide(curSlide)
  //   activateDot()
  // }

  // function deactivateDot() {
  //   slides[curSlide].classList.remove('active')
  //   dots[curSlide].classList.remove('active')
  // }

  // function activateDot() {
  //   // curSlide = (n + slides.length) % slides.length;
  //   slides[curSlide].classList.add('active')
  //   dots[curSlide].classList.add('active')
  // }

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

  // lastSlide.addEventListener('load', () => {
  //   centerButtons()
  // })
  function checkActive(num: number) {
    if (num === curSlide) return 'active'
  }

  return (
    <div className="slider">
      <div className="slide sl1 vis active" id="sl1">
        <img src={sliderImages.one} alt="leafy massage space" />
      </div>
      <div className="slide sl2 vis">
        <img src={sliderImages.two} alt="Deep tissue massage" />
      </div>
      <div className="slide sl3 vis">
        <img src={sliderImages.three} alt="Massage studio" />
      </div>
      <div className="slide">
        <img src={sliderImages.four} alt="Massage hands" />
      </div>
      <div className="slide">
        <img src={sliderImages.five} alt="massage consultation space" />
      </div>
      <div className="slide">
        <img src={sliderImages.six} alt="Neck massage" />
      </div>
      <div className="slide">
        <img src={sliderImages.seven} alt="Relaxing massage" id="lastSlide" />
      </div>
      <div className="dots" id="dotsID">
        <button
          className={`dot ${checkActive(1)}`}
          data-slide="1"
          onClick={() => setCurSlide(1)}
        ></button>
        <button
          className={`dot ${checkActive(2)}`}
          data-slide="2"
          onClick={() => setCurSlide(2)}
        ></button>
        <button
          className={`dot ${checkActive(3)}`}
          data-slide="3"
          onClick={() => setCurSlide(3)}
        ></button>
        <button
          className={`dot ${checkActive(4)}`}
          data-slide="4"
          onClick={() => setCurSlide(4)}
        ></button>
        <button
          className={`dot ${checkActive(5)}`}
          data-slide="5"
          onClick={() => setCurSlide(5)}
        ></button>
      </div>
    </div>
  )
}
export default Slider
