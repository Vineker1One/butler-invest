import "./Projects.css";
import { useState } from "react";

import img1 from "@/assets/images/projects/1.webp";
import img2 from "@/assets/images/projects/2.webp";
import img3 from "@/assets/images/projects/3.webp";
import img4 from "@/assets/images/projects/4.webp";

const images = [img1, img2, img3, img4];

export const Projects = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Наши проекты</h2>

        <div className="projects__grid">
          {images.map((img, i) => (
            <div
              key={i}
              className={`projects__item projects__item--${i + 1}`}
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`project-${i}`} />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeImage && (
        <div className="projects__modal" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="preview" />
          <button
            className="projects__close"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};