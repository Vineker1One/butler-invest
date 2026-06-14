import "./RenovationTypes.css";

import basicImg from "@/assets/images/services/renovation/basicImg.webp";
import basicSmallImg1 from "@/assets/images/services/renovation/basicSmallImg1.webp";
import basicSmallImg2 from "@/assets/images/services/renovation/basicSmallImg2.webp";
import trendyImg from "@/assets/images/services/renovation/trendyImg.webp";
import trendySmallImg1 from "@/assets/images/services/renovation/trendySmallImg1.webp";
import trendySmallImg2 from "@/assets/images/services/renovation/trendySmallImg2.webp";
import designImg from "@/assets/images/services/renovation/designImg.webp";
import designSmallImg1 from "@/assets/images/services/renovation/designSmallImg1.webp";
import designSmallImg2 from "@/assets/images/services/renovation/designSmallImg2.webp";
import renovationImg from "@/assets/images/services/renovation/renovation-main.webp";


const renovationTypes = [
    {
        id: "basic",
        titleAccent: "Базовый",
        accentFontSize: "5rem",
        titleMain: "ремонт",
        description: (
            <>
            Базовый ремонт от <span className="highlight-brand">Дворецкий</span> — новый уровень предчистовой отделки, который открывает мир неограниченных возможностей перед клиентом.,
            </>
        ),
            features: [
            "стены, подготовленные под оклейку обоями",
            "микроцементное покрытие в ванной комнате",
            "ковролин в жилых комнатах",
        ],
        mainImage: basicImg,
        smallImages: [basicSmallImg1, basicSmallImg2],
    },
    {
        id: "trendy",
        titleAccent: "Трендовый",
        accentFontSize: "4.1rem",
        titleMain: "ремонт",
        description: 
            "Трендовый современный ремонт - это ремонт, выполненный согласно стандартам и регламентам. Доступен в светлом и темном исполнении.",
            features: [
            "виниловые обои на флизелиновой основе",
            "плинтус металлический",
            "ламинат 32 класс",
            "двери МДФ",
        ],
        mainImage: trendyImg,
        smallImages: [trendySmallImg1, trendySmallImg2],
    },
    {
        id: "design",
        titleAccent: "Дизайнерский",
        accentFontSize: "3.6rem",
        titleMain: "ремонт",
        description:
            "Дизайнерский ремонт, выполненный из материалов премиальных брендов и согласно последним тенденциям в сфере ремонтно-отделочных работ жилых помещений.",
        features: [
            "окраска стен краской Tikkurila",
            "плинтус из дюрополимера, окрашенный в цвет стен",
            "ламинат by Quick Step 33 класс intense",
            "утепление пола и стен в СУ",
            "скрытые ниши под карнизы с подсветкой",
            "бра и светильники",
            "натяжное полотно с теневым профилем",
        ],
        mainImage: designImg,
        smallImages: [designSmallImg1, designSmallImg2],
    },
];

export const RenovationTypes = () => {
    return (
        <section className="renovation-types">
            <div className="renovation-types__container">
                {/* Верхний блок */}
                <div className="renovation-types__header">
                    <h2 className="renovation-types__title">Ремонт</h2>

                    <div className="renovation-types__image-wrapper">
                        <img
                            src={renovationImg}
                            alt="Ремонт квартир"
                            className="renovation-types__image"
                        />
                    </div>

                    <button className="renovation-types__button">
                        Подробнее
                    </button>

                    <p className="renovation-types__subtitle">
                        Полный цикл работ:
                        <br />
                        от подготовки проекта до финишной отделки,
                        <br />
                        чтобы вы могли наслаждаться пространством.
                    </p>
                </div>

                {/* Карточки ремонта */}
                <div className="renovation-types__cards">
                    {renovationTypes.map((card) => (
                        <div key={card.id} className="renovation-card">
                            {/* Левая часть — текст */}
                            <div className="renovation-card__left">
                                <h3 className="renovation-card__title">
                                    <span
                                        className="renovation-card__title-accent"
                                        style={{
                                            fontSize: card.accentFontSize,
                                        }}
                                    >
                                        {card.titleAccent}
                                    </span>
                                    <span className="renovation-card__title-main">
                                        {card.titleMain}
                                    </span>
                                </h3>

                                <p className="renovation-card__description">
                                    {card.description}
                                </p>

                                <div className="renovation-card__features">
                                    <p className="renovation-card__features-title">
                                        Что входит:
                                    </p>
                                    <ul className="renovation-card__features-list">
                                        {card.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="renovation-card__feature-item"
                                            >
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Центральная часть — большое фото */}
                            <div className="renovation-card__center">
                                <img
                                    src={card.mainImage}
                                    alt={card.titleAccent + " ремонт"}
                                    className="renovation-card__image-main"
                                />
                            </div>

                            {/* Правая часть — маленькие фото + кнопка */}
                            <div className="renovation-card__right">
                                <div className="renovation-card__images-small">
                                    <img
                                        src={card.smallImages[0]}
                                        alt=""
                                        className="renovation-card__image-small"
                                    />
                                    <img
                                        src={card.smallImages[1]}
                                        alt=""
                                        className="renovation-card__image-small"
                                    />
                                </div>
                                <button className="renovation-card__button">
                                    Оставить заявку
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
