import { useState } from "react";
import "./PropertySale.css";

import saleImg from "@/assets/images/services/property-sale/sale-main.webp";

import bonusImg1 from "@/assets/images/services/property-sale/bonus-kitchen.webp";
import bonusImg2 from "@/assets/images/services/property-sale/bonus-bedroom.webp";
import bonusImg3 from "@/assets/images/services/property-sale/bonus-interior.webp";

const saleSteps = [
    {
        number: "01",
        title: "Бесплатная оценка и консультация",
        text: "Эксперт осмотрит объект, проведет анализ рынка и даст рекомендации по цене и стратегии продажи",
    },
    {
        number: "02",
        title: "Подготовка объекта",
        text: "Профессиональная фотосъемка, хоумстейджинг, составление привлекательного описания",
    },
    {
        number: "03",
        title: "Продвижение и маркетинг",
        text: "Размещение на топовых площадках, таргетированная реклама, работа с собственной базой покупателей и инвесторов",
    },
    {
        number: "04",
        title: "Организация показов",
        text: "Проведение просмотров, фильтрация и квалификация покупателей",
    },
    {
        number: "05",
        title: "Переговоры и согласование условий",
        text: "Ведение переговоров, помощь в получении аванса, согласование условий сделки",
    },
    {
        number: "06",
        title: "Юридическое сопровождение:",
        text: "",
        sublist: [
            "проверка документов, подготовка договора, сопровождение сделки до получения денег и передачи ключей",
            "отчетность и поддержка",
            "регулярные отчеты о ходе продаж, консультации по вопросам налогообложения и альтернативных сделок",
        ],
    },
];



export const PropertySale = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="property-sale">
      <div className="property-sale__container">
        <h2 className="property-sale__title">Продажа недвижимости</h2>

        <div className="property-sale__image-wrapper">
          <img
            src={saleImg}
            alt="Продажа недвижимости: передача ключей"
            className="property-sale__image"
          />
        </div>

        <button
          className="property-sale__button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Свернуть" : "Подробнее"}
        </button>

        {/* 👇 Обёртка для анимации — весь контент после кнопки */}
        <div
          className={`property-sale__content-wrapper ${
            isExpanded ? "property-sale__content-wrapper--open" : ""
          }`}
        >
          <div className="property-sale__intro">
            <p className="property-sale__intro-text">
              Оценим ваш объект, подготовим к продаже, обеспечим
              профессиональное продвижение и полное юридическое сопровождение.
              Кроме того, обеспечим дополнительный доход собственнику на время
              продажи объекта.
            </p>
          </div>

          <div className="property-sale__advantages">
            <h3 className="property-sale__advantages-title">
              Преимущества Дворецкий:
            </h3>

            <ul className="property-sale__list">
              <li className="property-sale__item">
                экспертная команда с опытом более 10 лет
              </li>
              <li className="property-sale__item">
                собственная база реальных покупателей и инвесторов
              </li>
              <li className="property-sale__item">
                максимальное продвижение
              </li>
              <li className="property-sale__item">
                от классических площадок до соцсетей
              </li>
              <li className="property-sale__item">
                гарантия юридической чистоты и безопасности сделки
              </li>
              <li className="property-sale__item">
                прозрачная комиссия, без скрытых платежей
              </li>
              <li className="property-sale__item">
                возможность срочного выкупа или альтернативной сделки
              </li>
            </ul>
          </div>

          {/* ===== ЭТАПЫ РАБОТЫ ===== */}
          <div className="property-sale__timeline-section">
            <h3 className="property-sale__timeline-title">
              <span>Этапы</span> работы
            </h3>

            <div className="property-sale__steps-card">
              {saleSteps.map((step) => (
                <div key={step.number} className="sale-step">
                  <div className="sale-step__number">{step.number}</div>
                  <div className="sale-step__content">
                    <h4>{step.title}</h4>
                    {step.text && <p>{step.text}</p>}

                    {step.sublist && (
                      <ul className="sale-step__sublist">
                        {step.sublist.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="property-sale__subtitle">
              Повышаем продажную стоимость вашей недвижимости
            </h4>

            <div className="property-sale__green-box">
              <p>
                Готовим квартиру к продаже с{" "}
                <b>минимальными затратами</b> собственными бригадами
              </p>
            </div>

            <div className="property-sale__preparation">
              <p className="property-sale__preparation-title">
                Делаем всю подготовку квартиры:
              </p>
              <div className="property-sale__preparation-list">
                <span className="property-sale__preparation-item">
                  косметический ремонт
                </span>
                <span className="property-sale__preparation-item">
                  хоумстейджинг
                </span>
                <span className="property-sale__preparation-item">
                  генеральная уборка
                </span>
              </div>
            </div>
          </div>

          {/* ===== ДОПОЛНИТЕЛЬНЫЙ ДОХОД ===== */}
          <div className="property-sale__bonus-section">
            <div className="property-sale__bonus-images">
              <img
                src={bonusImg1}
                alt="Пример ремонта на кухне"
                className="property-sale__bonus-img"
              />
              <img
                src={bonusImg2}
                alt="Пример ремонта в спальне"
                className="property-sale__bonus-img"
              />
            </div>

            <h3 className="property-sale__bonus-title">
              Дополнительный доход на время продажи объекта
            </h3>

            <div className="property-sale__bonus-content">
              <ul className="property-sale__bonus-list">
                <li>
                  сдадим Ваш объект в краткосрочную или среднесрочную аренду на
                  время продажи, что позволит получить дополнительный доход от
                  100 тыс. до 1 млн.руб.
                </li>
                <li>приведем объект недвижимости в лучший вид</li>
                <li>сделаем клининг и фотосессию</li>
                <li>
                  организуем комплексное управление объектом и арендным потоком
                </li>
                <li>
                  самостоятельно организуем показы, привлечем трафик на готовый
                  арендный бизнес, проведем сделку
                </li>
              </ul>

              <div className="property-sale__bonus-img-wrapper">
                <img
                  src={bonusImg3}
                  alt="Интерьер"
                  className="property-sale__bonus-img-vertical"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
