import { useState, useEffect } from "react";
import "./Slider.css";

import sliderImage1 from "@/assets/images/hero/hero-1-1920.webp";
import sliderImage2 from "@/assets/images/hero/hero-2-1920.webp";
import sliderImage3 from "@/assets/images/hero/hero-3-1920.webp";
import sliderImage1Mobile from "@/assets/images/hero/hero-1-768.webp";
import sliderImage2Mobile from "@/assets/images/hero/hero-2-768.webp";
import sliderImage3Mobile from "@/assets/images/hero/hero-3-768.webp";

import ig from "@/assets/icons/instagram.svg";
import vk from "@/assets/icons/vk.svg";
import slider_next from "@/assets/icons/hero-slider.svg";

// ✅ Исправленный тип
type Slide = {
  id: number;
  image: string;
  mobileImage: string;
  text: string;
  position: string;
};

// ✅ Локальный массив (убираем проп)
const slides: Slide[] = [
  {
    id: 1,
    image: sliderImage1,
    mobileImage: sliderImage1Mobile,
    text: "",
    position: "middle-white",
  },
  {
    id: 2,
    image: sliderImage2,
    mobileImage: sliderImage2Mobile,
    text: "«Инвестиции в недвижимость, даже в очень небольших масштабах, остаются проверенным и верным средством увеличения денежного потока и богатства человека» — Роберт Кийосаки",
    position: "bottom-white",
  },
  {
    id: 3,
    image: sliderImage3,
    mobileImage: sliderImage3Mobile,
    text: "«Чистый разум и свежие идеи – вот самая благодатная почва для роста доходов, а вдохновение – лучшая мотивация для успешного бизнеса» - Дэвид Рокфеллер",
    position: "middle-white",
  },
];

// ✅ Убираем проп slides
export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
};

  return (
    <div className="slider">
      {slides.map((slide, index) => {
        const currentImage = isMobile ? slide.mobileImage : slide.image;
        const isActive = index === currentSlide;

        return (
          <div key={slide.id} className={`slider__slide ${isActive ? "active" : ""}`}>
            {!isMobile && (
              <div
                className="slider__image-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            )}

            <div
              className={`slider__image slider__image--${slide.id} ${isActive ? "active" : ""}`}
              style={{ backgroundImage: `url(${currentImage})` }}
            />

            <div className="slider__overlay" />

            {slide.text && (
              <div className={`slider__content slider__content--${slide.position} ${isActive ? "active" : ""}`}>
                <p>{slide.text}</p>
              </div>
            )}
          </div>
        );
      })}

      <button className="slider__prev" onClick={prevSlide}>
      <img src={slider_next} alt="Previous" />
    </button>

      <div className="slider__socials">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={vk} alt="VK" />
        </a>
      </div>

      <button className="slider__next" onClick={nextSlide}>
        <img src={slider_next} alt="Next" />
      </button>
    </div>
  );
};