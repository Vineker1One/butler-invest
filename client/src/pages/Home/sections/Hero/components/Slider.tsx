import { useState, useEffect } from "react";
import "./Slider.css";

import img1 from "@/assets/images/hero/hero-1.webp";
import img2 from "@/assets/images/hero/hero-2.webp";
import img3 from "@/assets/images/hero/hero-3.webp";

const slides = [
    { img: img1, position: "center top" },
    { img: img2, position: "center top" },
    { img: img3, position: "center bottom" },
];

export const Slider = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`slider__image ${i === index ? "active" : ""}`}
                    style={{
                        backgroundImage: `url(${slide.img})`,
                        backgroundPosition: slide.position,
                    }}
                />
            ))}

            <div className="slider__overlay" />

            <button className="slider__next" onClick={nextSlide}>
                →
            </button>
        </div>
    );
};
