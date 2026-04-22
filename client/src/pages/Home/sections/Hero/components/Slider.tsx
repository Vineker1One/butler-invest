import { useState, useEffect } from 'react'
import './Slidex.css'

import img1 from '@/assets/images/hero/hero-1.webp'
import img2 from '@/assets/images/hero/hero-2.webp'
import img3 from '@/assets/images/hero/hero-3.webp'

const images = [img1, img2, img3]

export const Slider = () => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`slider__image ${i === index ? 'active' : ''}`}
          loading="lazy"
          alt={`slide-${i}`}
        />
      ))}

      <div className="slider__overlay" />

      <button className="slider__next" onClick={nextSlide}>
        →
      </button>
    </div>
  )
}