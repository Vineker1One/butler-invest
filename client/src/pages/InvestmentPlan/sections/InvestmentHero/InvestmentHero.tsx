import "./InvestmentHero.css";
import heroBg from "@/assets/images/investmentPlan/hero-flowers.webp";

export const InvestmentHero = () => {
  return (
    <section className="investment-hero">
      {/* Фоновая картинка с заголовком */}
      <div className="investment-hero__visual">
        <img src={heroBg} alt="Цветы" className="investment-hero__bg" />
        <div className="investment-hero__title-box">
          <h1 className="investment-hero__title">Инвестиционный план</h1>
        </div>
      </div>

      <div className="investment-hero__container">
        {/* Главный заголовок */}
        <h2 className="investment-hero__subtitle">
          Сравнение с классическими инвестициями <br />
          от компании <span className="highlight-brand-investment">ДВОРЕЦКИЙ</span>
        </h2>

        {/* Текстовый блок с описанием */}
        <div className="investment-hero__card">
          <p className="investment-hero__intro">
            Инвестиции: что это такое? Инвестиции — это вложения денег для их сохранения и приумножения.
          </p>
          
          <div className="investment-hero__list-wrapper">
            <p className="investment-hero__list-title">Объектами инвестиций могут быть:</p>
            <ul className="investment-hero__list">
              <li>недвижимость</li>
              <li>вклады</li>
              <li>драгоценные металлы</li>
              <li>валюта</li>
              <li>ценные бумаги</li>
            </ul>
          </div>

          <p className="investment-hero__outro">
            Они имеют разную степень риска, сейчас мы подробно расскажем все плюсы и минусы!
          </p>
        </div>
      </div>
    </section>
  );
};