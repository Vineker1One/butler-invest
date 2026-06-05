import { useState } from "react";
import "./PortfolioShowcase.css";

// Импорт изображений WebP
import projectBedroom1 from "@/assets/images/portfolio/project-bedroom-1.webp";
import realBedroom1 from "@/assets/images/portfolio/real-bedroom-1.webp";
import ideaLiving1 from "@/assets/images/portfolio/idea-living-1.webp";
import ideaLiving2 from "@/assets/images/portfolio/idea-living-2.webp";
import ideaLiving3 from "@/assets/images/portfolio/idea-living-3.webp";
import ideaLiving4 from "@/assets/images/portfolio/idea-living-4.webp";
import ideaLiving5 from "@/assets/images/portfolio/idea-living-5.webp";
import ideaLiving6 from "@/assets/images/portfolio/idea-living-6.webp";
import ideaLiving7 from "@/assets/images/portfolio/idea-living-7.webp";
import ideaLiving8 from "@/assets/images/portfolio/idea-living-8.webp";
import homestaging1 from "@/assets/images/portfolio/homestaging-1.webp";
import homestaging2 from "@/assets/images/portfolio/homestaging-2.webp";
import homestaging3 from "@/assets/images/portfolio/homestaging-3.webp";
import homestaging4 from "@/assets/images/portfolio/homestaging-4.webp";
import homestaging5 from "@/assets/images/portfolio/homestaging-5.webp";

// ===== СЕКЦИЯ: ОТ ПРОЕКТА ДО РЕАЛИЗАЦИИ =====
const projectRealizationData = [
  {
    id: 1,
    projectImage: projectBedroom1,
    realImage: realBedroom1,
    title: "Спальня в классическом стиле",
  },
];

// ===== СЕКЦИЯ: ЛУЧШИЕ ИДЕИ =====
const bestIdeasData = [
  {
    id: 1,
    image: ideaLiving1,
    title: "Гостиная с элементами восточного стиля",
  },
  {
    id: 2,
    image: ideaLiving2,
    title: "Обеденная зона в теплых тонах",
  },
  {
    id: 3,
    image: ideaLiving3,
    title: "Система хранения с декором",
  },
  {
    id: 4,
    image: ideaLiving4,
    title: "Светлая комната с высокими окнами",
  },
    {
    id: 5,
    image: ideaLiving5,
    title: "Гостиная с элементами восточного стиля",
  },
  {
    id: 6,
    image: ideaLiving6,
    title: "Обеденная зона в теплых тонах",
  },
  {
    id: 7,
    image: ideaLiving7,
    title: "Система хранения с декором",
  },
  {
    id: 8,
    image: ideaLiving8,
    title: "Светлая комната с высокими окнами",
  },
];

// ===== СЕКЦИЯ: ВЫГОДНЫЙ ХОУМСТЕЙДЖИНГ =====
const homestagingData = [
  {
    id: 1,
    image: homestaging1,
    title: "До хоумстейджинга",
  },
  {
    id: 2,
    image: homestaging2,
    title: "",
  },
  {
    id: 3,
    image: homestaging3,
    title: "Финальный результат",
  },
    {
    id: 4,
    image: homestaging4,

  },
  {
    id: 5,
    image: homestaging5,
    title: "Финальный результат",
  },
];

// Объединяем все фото для навигации
const allPhotos = [
  ...projectRealizationData.flatMap((item) => [
    { id: `proj-${item.id}-1`, src: item.projectImage, title: `${item.title} - проект` },
    { id: `proj-${item.id}-2`, src: item.realImage, title: `${item.title} - реализация` },
  ]),
  ...bestIdeasData.map((item) => ({ id: `idea-${item.id}`, src: item.image, title: item.title })),
  ...homestagingData.map((item) => ({ id: `home-${item.id}`, src: item.image, title: item.title })),
];

export const PortfolioShowcase = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  // Открыть фото
  const openPhoto = (photoSrc: string) => {
    const index = allPhotos.findIndex((photo) => photo.src === photoSrc);
    setCurrentPhotoIndex(index);
    setSelectedPhoto(photoSrc);
    document.body.style.overflow = "hidden"; // Блокируем скролл
  };

  // Закрыть фото
  const closePhoto = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto"; // Возвращаем скролл
  };

  // Следующее фото
  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentPhotoIndex + 1) % allPhotos.length;
    setCurrentPhotoIndex(nextIndex);
    setSelectedPhoto(allPhotos[nextIndex].src);
  };

  // Предыдущее фото
  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentPhotoIndex - 1 + allPhotos.length) % allPhotos.length;
    setCurrentPhotoIndex(prevIndex);
    setSelectedPhoto(allPhotos[prevIndex].src);
  };

  // Закрытие по ESC
  useState(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowRight") nextPhoto(e as any);
      if (e.key === "ArrowLeft") prevPhoto(e as any);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  });

  return (
    <section className="portfolio-showcase">
      <div className="portfolio-showcase__container">
        
        {/* ===== ОТ ПРОЕКТА ДО РЕАЛИЗАЦИИ ===== */}
        <div className="portfolio-section">
          <h2 className="portfolio-section__title">От проекта до реализации</h2>
          
          <div className="project-realization__grid">
            {projectRealizationData.map((item) => (
              <div key={item.id} className="project-realization__pair">
                <div className="project-realization__item">
                  <div className="project-realization__label project-realization__label--project">
                    Проект
                  </div>
                  <img 
                    src={item.projectImage} 
                    alt={`${item.title} - проект`}
                    className="project-realization__image portfolio-image"
                    onClick={() => openPhoto(item.projectImage)}
                  />
                </div>
                <div className="project-realization__item">
                  <div className="project-realization__label project-realization__label--real">
                    Реализация
                  </div>
                  <img 
                    src={item.realImage} 
                    alt={`${item.title} - реализация`}
                    className="project-realization__image portfolio-image"
                    onClick={() => openPhoto(item.realImage)}
                  />
                </div>
                {item.title && (
                  <p className="project-realization__caption">{item.title}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== ЛУЧШИЕ ИДЕИ ===== */}
            <div className="portfolio-section">
            <h2 className="portfolio-section__title">Лучшие идеи</h2>
            
            <div className="ideas-grid">
                {bestIdeasData.map((item) => (
                <div 
                    key={item.id} 
                    className="ideas-grid__item"
                    onClick={() => openPhoto(item.image)}
                >
                    <div className="ideas-grid__image-wrapper">
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="ideas-grid__image"
                    />
                    <div className="ideas-grid__overlay">
                        
                    </div>
                    </div>
                    {item.title && (
                    <p className="ideas-grid__caption">{item.title}</p>
                    )}
                </div>
                ))}
            </div>
            </div>

            {/* ===== ВЫГОДНЫЙ ХОУМСТЕЙДЖИНГ ===== */}
            <div className="portfolio-section">
            <h2 className="portfolio-section__title">Выгодный хоумстейджинг</h2>
            
            <div className="homestaging-grid homestaging-grid--single-column">
                {homestagingData.map((item) => (
                <div 
                    key={item.id} 
                    className="homestaging-grid__item"
                    onClick={() => openPhoto(item.image)}
                >
                    <div className="homestaging-grid__image-wrapper">
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="homestaging-grid__image"
                    />
                    <div className="homestaging-grid__overlay">
                        
                    </div>
                    </div>
                    {item.title && (
                    <p className="homestaging-grid__caption">{item.title}</p>
                    )}
                </div>
                ))}
            </div>
            </div>

      </div>

      {/* ===== LIGHTBOX (МОДАЛЬНОЕ ОКНО) ===== */}
      {selectedPhoto && (
        <div className="portfolio-lightbox" onClick={closePhoto}>
          <button className="portfolio-lightbox__close" onClick={closePhoto}>
            ✕
          </button>
          
          <button className="portfolio-lightbox__nav portfolio-lightbox__nav--prev" onClick={prevPhoto}>
            ‹
          </button>
          
          <button className="portfolio-lightbox__nav portfolio-lightbox__nav--next" onClick={nextPhoto}>
            ›
          </button>

          <div className="portfolio-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedPhoto} 
              alt="Увеличенное фото"
              className="portfolio-lightbox__image"
            />
            {allPhotos[currentPhotoIndex]?.title && (
              <p className="portfolio-lightbox__title">
                {allPhotos[currentPhotoIndex].title}
              </p>
            )}
          </div>

          <div className="portfolio-lightbox__counter">
            {currentPhotoIndex + 1} / {allPhotos.length}
          </div>
        </div>
      )}
    </section>
  );
};