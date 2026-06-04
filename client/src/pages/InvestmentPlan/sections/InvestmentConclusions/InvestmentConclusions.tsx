import "./InvestmentConclusions.css";

export const InvestmentConclusions = () => {
  return (
    <section className="investment-conclusions">
      <div className="investment-conclusions__container">
        
        <h2 className="investment-conclusions__title">Делаем выводы</h2>

        <div className="investment-conclusions__list">
          
          {/* Пункт 01 */}
          <div className="conclusion-item">
            <div className="conclusion-item__number">01.</div>
            <div className="conclusion-item__content">
              <p>
                <b>Инвестиции в недвижимость</b> — один из самых <b>надежных</b> и <b>стабильных</b> типов вложений.
              </p>
            </div>
          </div>

          {/* Пункт 02 */}
          <div className="conclusion-item">
            <div className="conclusion-item__number">02.</div>
            <div className="conclusion-item__content">
              <p>
                <b>Зарабатывать можно и с небольшим капиталом</b> — покупать на старте не квартиры, а парковочные места или кладовые, которые также можно сдавать в аренду или перепродать.
              </p>
            </div>
          </div>

          {/* Пункт 03 */}
          <div className="conclusion-item">
            <div className="conclusion-item__number">03.</div>
            <div className="conclusion-item__content">
              <p>
                Инвестору <b>лучше довериться</b> таким <b>профессионалам</b> как <span className="highlight-brand_conclusion">ДВОРЕЦКИЙ</span>, который поможет подобрать объект и возьмет все хлопоты по управлению на себя.
              </p>
            </div>
          </div>

          {/* Пункт 04 с подсписками */}
          <div className="conclusion-item">
            <div className="conclusion-item__number">04.</div>
            <div className="conclusion-item__content">
              <p>
                <span className="highlight-brand_conclusion">«ДВОРЕЦКИЙ»</span> — онлайн-платформа.
              </p>
              
              <p className="conclusion-item__subtitle">
                На одной платформе собраны все сервисы для:
              </p>
              <ul className="conclusion-item__list">
                <li>покупки недвижимости</li>
                <li>продажи недвижимости</li>
                <li>аренды недвижимости по всей России</li>
              </ul>

              <p className="conclusion-item__subtitle">
                А также различные дополнительные услуги:
              </p>
              <ul className="conclusion-item__list">
                <li>дизайн интерьера</li>
                <li>капитальный ремонт квартир</li>
                <li>помощь в переезде</li>
                <li>меблировка</li>
                <li>страхование</li>
                <li>оценка недвижимости</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};