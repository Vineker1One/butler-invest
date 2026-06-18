import { useState } from "react";
import "./PropertyManagement.css";

import managementImg from "@/assets/images/services/management/management-main.webp";

const steps = [
  {
    number: 1,
    title: "Анализ рынка",
    text: " Проверяем динамику цен за последние три месяца и ставим максимальную цену за аренду",
  },
  {
    number: 2,
    title: "Проект Договора",
    text: " Проведя финанализ на основании нашего опыта и изучения текущей аналитики по рынку, составляем Проект Договора",
  },
  {
    number: 3,
    title: "Выезд агента на объект",
    text: " Утверждение и подписание Договора и Акта приема-передачи с собственником, фото и видео фиксация состояния объекта",
  },
  {
    number: 4,
    title: "Страхование объекта",
    text: " Страхуем объект по желанию собственника. Мы так же, как и Вы заинтересованы в гарантированной сохранности объекта и всего имущества",
  },
  {
    number: 5,
    title: "Ремонт и хоумстейджинг",
    text: " При необходимости производим ремонт и хоумстейджинг собственными строительными бригадами. Это повышает привлекательность объекта для арендаторов",
  },
  {
    number: 6,
    title: "Подготовка объекта",
    text: " Отдел ТО и отдел клининга подготавливают Ваш объект к сдаче в аренду. Производится генеральная уборка. После полной подготовки объекта профессиональный фотограф делает фото и видео съемку, составляем продающие тексты и описание, размещаем объявление. Мы знаем как разместить объявление так, чтобы загрузка объекта приближалась к полной. Тщательно выбираем арендатора, принимаем платежи, проводим заселение",
  },
];

export const PropertyManagement = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="property-management">
      <div className="property-management__container">
        
        {/* Заголовок */}
        <h2 className="property-management__title">
          Управление объектами недвижимости
        </h2>

        {/* Изображение */}
        <div className="property-management__image-wrapper">
          <img
            src={managementImg}
            alt="Управление объектами недвижимости"
            className="property-management__image"
          />
        </div>

        <button
          className="property-management__button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Свернуть" : "Подробнее"}
        </button>

        {/* 👇 Обёртка для анимации */}
        <div
          className={`property-management__content-wrapper ${
            isExpanded ? "property-management__content-wrapper--open" : ""
          }`}
        >
          {/* Вопрос */}
          <p className="property-management__question">
            Как происходит передача объекта в доверительное управление?
          </p>

          {/* Шаги процесса */}
          <div className="property-management__steps">
            {steps.map((step) => (
              <div key={step.number} className="management-step">
                <div className="management-step__number">{step.number}.</div>
                <div className="management-step__content">
                  <h3 className="management-step__title">{step.title}.</h3>
                  <p className="management-step__text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};