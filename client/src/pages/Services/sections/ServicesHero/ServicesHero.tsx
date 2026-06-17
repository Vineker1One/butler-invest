import { useState } from "react";
import "./ServicesHero.css";

import serviceImg from "@/assets/images/services/servicesHero/service-main2.webp";
import stepsImg from "@/assets/images/services/servicesHero/steps2.webp";

const steps = [
    {
        number: "01",
        title: "Заявка и консультация",
        text: "Оставьте заявку — наш эксперт свяжется с вами для уточнения параметров и целей",
    },
    {
        number: "02",
        title: "Аналитика и подбор",
        text: "Проведем анализ рынка, подберем оптимальные варианты по вашим критериям (тип недвижимости, бюджет, локация, инвестиционная привлекательность)",
    },
    {
        number: "03",
        title: "Организация просмотров",
        text: "Согласуем удобное время, организуем показы выбранных объектов",
    },
    {
        number: "04",
        title: "Юридическая проверка",
        text: "Проверим юридическую чистоту объекта и документов",
    },
    {
        number: "05",
        title: "Помощь с ипотекой",
        text: "Подберем лучшие условия, поможем с одобрением",
    },
    {
        number: "06",
        title: "Сопровождение сделки",
        text: "Полное сопровождение на всех этапах:от аванса до регистрации права собственности. Подбор недвижимости под Ваши задачи",
    },
];

export const ServicesHero = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className="services-hero">
            <div className="services-hero__container">
                <div className="services-hero__header">
                    <p className="services-hero__title">
                        Услуги, что умеет наш <span>ДВОРЕЦКИЙ</span>
                        <br />и почему стоит выбирать именно нас?
                    </p>
                </div>

                <div className="services-card">
                    <h2 className="services-card__title">
                        Индивидуальный подбор недвижимости
                    </h2>

                    <div className="services-card__image-wrapper">
                        <img
                            src={serviceImg}
                            alt=""
                            className="services-card__image"
                        />
                    </div>

                    <button 
                        className="services-card__button"
                        onClick={() => setIsExpanded(!isExpanded)} // 👈 Переключаем
                    >
                        {isExpanded ? "Свернуть" : "Подробнее"} {/* 👈 Меняем текст */}
                    </button>

                    {/* 👇 Обёртка для анимации */}
                    <div className={`services-steps-wrapper ${isExpanded ? "services-steps-wrapper--open" : ""}`}>
                        <h3 className="services-steps__title">
                        <span>Этапы</span> работы
                        </h3>
                        <div className="services-steps">
                        <div className="services-steps__left">
                            <div className="services-steps__timeline">
                            {steps.map((step) => (
                                <div className="step" key={step.number}>
                                <div className="step__number">
                                    {step.number}
                                </div>
                                <div className="step__content">
                                    <h4>{step.title}</h4>
                                    <p>{step.text}</p>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div className="services-steps__right">
                            <img
                            src={stepsImg}
                            alt=""
                            className="services-steps__image"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
