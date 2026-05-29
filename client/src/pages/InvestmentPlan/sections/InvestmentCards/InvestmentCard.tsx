import "./InvestmentCard.css";

// Импорт изображений (замени пути на свои)
import imgRealEstate from "@/assets/images/investmentPlan/real-estate.webp";
import imgDeposits from "@/assets/images/investmentPlan/deposits.webp";
import imgMetals from "@/assets/images/investmentPlan/metals.webp";
import imgCurrency from "@/assets/images/investmentPlan/currency.webp";
import imgSecurities from "@/assets/images/investmentPlan/securities.webp";
import imgCompany from "@/assets/images/investmentPlan/company-offer.webp";

// Массив данных для всех 6 карточек
const investmentCardsData = [
  {
    id: "real-estate",
    title: "Недвижимость",
    image: imgRealEstate,
    description: "Инвестиции в недвижимость — это вложение свободных денежных средств в объекты недвижимого имущества с целью сохранения и приумножения капитала. Цели инвестора — сохранить капитал и увеличить его, создать пассивный доход.",
    pros: [
      "рост стоимости самого объекта — цены на квартиры растут из года в год, что делает их более прибыльным активом по сравнению с вкладами",
      "получение постоянного дохода — арендная плата может приносить стабильный ежемесячный доход",
      "защита от инфляции — недвижимость обычно сохраняет свою стоимость в условиях высокой инфляции, в отличие от денежных средств, которые обесцениваются со временем",
      "доступ к кредитам — под залог недвижимости в дальнейшем можно получить заёмные средства без потери актива, необязательно продавать квартиру, если банк готов дать под ее залог крупную сумму в долг",
      "налоговый вычет — при покупке недвижимости дополнительно можно получить возврат НДФЛ от налоговой и вернуть до 13% от её стоимости (не более 260 тыс.руб.)",
    ],
    cons: [
      "высокий первоначальный взнос (например, при покупке жилья в ипотеку)",
      "окупаемость жилья при сдаче в аренду может занять годы, что требует терпения и долгосрочного планирования",
    ],
    link: "#",
  },
  {
    id: "deposits",
    title: "Вклады",
    image: imgDeposits,
    description: "Вклады — один из самых простых и понятных способов инвестирования. Вы отдаете деньги банку под определенный процент на определенный срок.",
    pros: [
      "высокая надежность (до 1,4 млн рублей гарантированы государством)",
      "простота управления (открыл вклад и ждешь начислений)",
      "предсказуемый доход",
    ],
    cons: [
      "низкая доходность (часто ниже инфляции)",
      "нельзя снять деньги без потери процентов",
      "капитал не растет, а лишь сохраняет свою стоимость",
    ],
    link: "#",
  },
  {
    id: "metals",
    title: "Драгоценные металлы",
    image: imgMetals,
    description: "Инвестиции в драгоценные металлы (золото, серебро, платина) — это классический способ сохранения капитала на протяжении веков.",
    pros: [
      "максимальная защита от кризисов и геополитических рисков",
      "высокая ликвидность (легко продать в любой момент)",
      "вечная ценность",
    ],
    cons: [
      "не приносит пассивного дохода (дивидендов)",
      "цена может быть нестабильной в краткосрочной перспективе",
      "сложности с хранением физических слитков",
    ],
    link: "#",
  },
  {
    id: "currency",
    title: "Валюта",
    image: imgCurrency,
    description: "Покупка иностранной валюты позволяет диверсифицировать портфель и защититься от обесценивания национальной валюты.",
    pros: [
      "высокая ликвидность (можно обменять быстро)",
      "защита от инфляции рубля",
      "доступность (валюту можно купить почти везде)",
    ],
    cons: [
      "высокие волатильность и риски",
      "отсутствие собственного дохода (рост только за счет курса)",
      "комиссии при обмене и хранении",
    ],
    link: "#",
  },
  {
    id: "securities",
    title: "Ценные бумаги",
    image: imgSecurities,
    description: "Акции и облигации позволяют получить доход за счет роста стоимости компании или дивидендов.",
    pros: [
      "потенциально самая высокая доходность",
      "получение дивидендов (пассивный доход)",
      "участие в росте экономики через бизнес",
    ],
    cons: [
      "высокий риск потери капитала",
      "требует знаний и времени на анализ",
      "зависимость от мировых рынков",
    ],
    link: "#",
  },
  {
    id: "company-offer",
    title: "Предложение от компании Дворецкий",
    image: imgCompany,
    description: "Мы предлагаем уникальные условия инвестирования в проверенные объекты с гарантированным доходом и полным юридическим сопровождением.",
    pros: [
      "высокая доходность (от 15% годовых)",
      "надежность и прозрачность сделок",
      "возможность пассивного дохода без вашего участия",
      "подбор объекта под ваш бюджет",
    ],
    cons: [
      "необходимость первоначального капитала",
      "инвестиции долгосрочные (от 1 года)",
    ],
    link: "/contact", // Пример ссылки на страницу контактов
  },
];

export const InvestmentCards = () => {
  return (
    <section className="investPlan-cards-section">
      <div className="investPlan-cards__container">
        {investmentCardsData.map((card) => (
          <div key={card.id} className="investPlan-card">
            
            {/* Заголовок */}
            <h3 className="investPlan-card__title">{card.title}</h3>

            {/* Фото */}
            <div className="investPlan-card__image-wrapper">
              <img 
                src={card.image} 
                alt={card.title} 
                className="investPlan-card__image" 
              />
            </div>

            {/* Описание */}
            <p className="investPlan-card__description">{card.description}</p>

            {/* Кнопка */}
            <button 
              className="investPlan-card__button"
              onClick={() => window.location.href = card.link} // Заглушка перехода
            >
              Подробнее
            </button>

            {/* Блок с плюсами и минусами */}
            <div className="investPlan-card__details">
              
              <div className="investPlan-card__pros">
                <h4 className="investPlan-card__details-title">Плюсы:</h4>
                <ul className="investPlan-card__list">
                  {card.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="investPlan-card__cons">
                <h4 className="investPlan-card__details-title">Минусы:</h4>
                <ul className="investPlan-card__list">
                  {card.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};