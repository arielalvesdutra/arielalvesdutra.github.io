import React, { useState, useEffect } from 'react'
import './Slider.scss'

interface SliderProps {
  itemsPerSlide: number
  items: []
}

const Slider = (props: SliderProps) => {

  const [currentSlide, setCurrentSlide] = useState(1)
  const [totalSlides, setTotalSlides] = useState(1)
  const [slideItems, setSlideItems] = useState([])

  useEffect(() => {
    setTotalSlides(totalSlidesCalc(props.items.length, props.itemsPerSlide))
    setSlideItems(props.items.slice(0, props.itemsPerSlide))
  }, [props])


  const callPreviousSlide = () => {
    if (isPreviousSlideDisabled()) return

    const previousSlide = currentSlide - 1
    const max = maxCalc(props.itemsPerSlide, previousSlide)
    const min = minCalc(props.itemsPerSlide, previousSlide)

    setCurrentSlide(previousSlide)
    setSlideItems(props.items.slice(min, max))
  }

  const callNextSlide = () => {
    if (isNextSlideDisabled()) return

    const nextSlide = currentSlide + 1
    const max = maxCalc(props.itemsPerSlide, nextSlide)
    const min = minCalc(props.itemsPerSlide, nextSlide)

    setCurrentSlide(nextSlide)
    setSlideItems(props.items.slice(min, max))
  }

  const totalSlidesCalc = (totalItems: number, itemsPerPage: number) => {
    return Math.ceil(totalItems / itemsPerPage)
  }

  const maxCalc = (itemsPerSlide: number, nextSlide: number) => {
    return (nextSlide * itemsPerSlide)
  }

  const minCalc = (itemsPerSlide: number, nextSlide: number) => {
    return ((nextSlide - 1) * itemsPerSlide)
  }

  const isPreviousSlideDisabled = () => {
    return currentSlide <= 1
  }

  const isNextSlideDisabled = () => {
    return currentSlide >= totalSlides
  }

  return (
    <div className="slider">
      <div className="slider__content">

        <button
          className="slider__content__arrow__button"
          onClick={callPreviousSlide}
          disabled={isPreviousSlideDisabled()}>
          {`<`}
        </button>
        <button
          className="slider__content__arrow__button slider__content__arrow__rightButton"
          onClick={callNextSlide}
          disabled={isNextSlideDisabled()}>
          {`>`}
        </button>

        <ul className="slider__list">
          {slideItems && slideItems.map((item: any, key) => (
            <li className="slider__list__item" key={key}>
              {item}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Slider
