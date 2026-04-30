import "./Capabilities.css";
import { useEffect } from "react";

import img1 from "@/assets/images/capabilities/capability-1.webp";
import img2 from "@/assets/images/capabilities/capability-2.webp";
import img3 from "@/assets/images/capabilities/capability-3.webp";
import img4 from "@/assets/images/capabilities/capability-4.webp";

type CapabilityItem = {
  id: number;
  image: string;
  title: string;
  text: string;
};

const capabilities: CapabilityItem[] = [
  {
    id: 1,
    image: img1,
    title:
      "Профессиональный подбор и расчет прогноза годового дохода по удорожанию недвижимости",
    text:
      "Оставьте заявку — мы подберем лучшие предложения по вашему запросу, проведем аналитику, поможем с ипотекой и обеспечим полное юридическое сопровождение.",
  },
  {
    id: 2,
    image: img2,
    title: "Ремонт активов под ключ - бюджет ремонта рассматривается как инвестиция",
    text:
      "Полный цикл работ: от подготовки проекта до финишной отделки, чтобы вы могли наслаждаться пространством.",
  },
  {
    id: 3,
    image: img3,
    title: "Хоумстейджинг и подготовка к сдаче в аренду/продаже",
    text:
      "Стилизация и декорирование жилья для улучшения его внешнего вида — помогает быстрее и более эффективно продать или сдать в аренду недвижимость.",
  },
  {
    id: 4,
    image: img4,
    title: "Поиск порядочного арендатора посуточно или помесячно, поиск покупателей при продаже",
    text:
      "Тщательно выбираем арендатора/покупателя, принимаем платежи, проводим заселение, обеспечим профессиональное продвижение и полное юридическое сопровождение.",
  },
];

export const Capabilities = () => {
  useEffect(() => {
  const elements = document.querySelectorAll(".capability");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <section className="capabilities">
      <div className="capabilities__container">


        <div className="capabilities__grid">
            <div className="capabilities__title">
                <p>Что умеет</p>
                <h2>ДВОРЕЦКИЙ?</h2>
            </div>
          {capabilities.map((item, index) => (
            <article
              key={item.id}
              className={`capability ${
                index % 2 === 0 ? "capability--normal" : "capability--reverse"
              }`}
            >

              <div className="capability__text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

                <div className="capability__image-wrapper">
                <div className={`capability__number capability__number--${item.id}`}>
                    <span>{item.id}</span>
                </div>

                <img
                    src={item.image}
                    alt={item.title}
                    className="capability__image"
                    loading="lazy"
                />
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};