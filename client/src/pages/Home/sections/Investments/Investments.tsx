import "./Investments.css";

import img1 from "@/assets/images/investments/private.webp";
import img2 from "@/assets/images/investments/commercial.webp";

export const Investments = () => {
  return (
    <section className="investments">
      <div className="investments__container">

        <div className="investments__header">
          <p>Рассмотрите удобные инвестиции в недвижимость с сервисом</p>
          <h2>ДВОРЕЦКИЙ:</h2>
        </div>

        <div className="investments__grid">

          {/* CARD 1 */}
          <div className="investment-card">
            <div className="investment-card__image-wrapper">
              <img src={img1} alt="" />
              <div className="investment-card__badge">
                Частная недвижимость
              </div>
            </div>

            <div className="investment-card__content">
              <ul>
                <li>Профессиональный подбора и расчет прогноза годового дохода по удорожанию недвижимости</li>
                <li>Ремонт активов под ключ, бюджет ремонта рассматривается как инвестиция</li>
                <li>Хоумстейджинг и подготовка к сдаче в аренду</li>
                <li>Поиск порядочного арендатора посуточно или помесячно и поддержание порядка</li>
              </ul>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="investment-card">
            <div className="investment-card__image-wrapper">
              <img src={img2} alt="" />
              <div className="investment-card__badge">
                Коммерческая недвижимость
              </div>
            </div>

            <div className="investment-card__content">
              <ul>
                <li>Рассмотрите возможность инвестиции в помещения предназначенные для коммерческого использования</li>
                <li>Вы можете стать владельцем части торгового центра или помещения промышленного назначения</li>
                <li>Паи могут быть неравнозначные</li>
                <li>Лизинг</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};