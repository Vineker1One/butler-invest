import { useState } from "react";
import "./Slider.css";

import hero1 from "@/assets/images/hero/hero-1.webp";
import hero2 from "@/assets/images/hero/hero-2.webp";
import hero3 from "@/assets/images/hero/hero-3.webp";

import ig from "@/assets/icons/instagram.svg";
import vk from "@/assets/icons/vk.svg";
import slider_next from "@/assets/icons/hero-slider.svg";

type Slide = {
  img: string;
  subtitle: string;
  textStyle: string;
};

const slides: Slide[] = [
  {
    img: hero1,
    subtitle: "",
    textStyle: "",
  },
  {
    img: hero2,
    subtitle: "«Инвестиции в недвижимость, даже в очень небольших масштабах, остаются проверенным и верным средством увеличения денежного потока и богатства человека» — Роберт Кийосаки",
    textStyle: "middle-white",
  },
  {
    img: hero3,
    subtitle: "«Чистый разум и свежие идеи – вот самая благодатная почва для роста доходов, а вдохновение – лучшая мотивация для успешного бизнеса» - Дэвид Рокфеллер",
    textStyle: "bottom-black",
  },
];

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="slider">
  {slides.map((slide, i) => (
    <div
      key={i}
      className={`slider__slide ${i === index ? "active" : ""}`}
    >
      <div
        className="slider__image-bg"
        style={{
          backgroundImage: `url(${slide.img})`,
        }}
      />

      <div
        className={`slider__image slider__image--${i + 1}`}
        style={{
          backgroundImage: `url(${slide.img})`,
        }}
      />
    </div>
  ))}

  <div className="slider__overlay" />

<div
  key={index}
  className={`slider__content slider__content--${slides[index].textStyle}`}
>
  <p>{slides[index].subtitle}</p>
</div>

  <div className="slider__socials">
    <a href="#" aria-label="Instagram">
      <img src={ig} alt="" />
    </a>

    <a href="#" aria-label="VK">
      <img src={vk} alt="" />
    </a>
  </div>

  <button className="slider__next" onClick={nextSlide} type="button">
    <img src={slider_next} alt="Next" />
  </button>
</div>
  );
};