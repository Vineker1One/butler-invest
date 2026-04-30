import "./About.css";

import aboutImage from "@/assets/images/about/about-bedroom.webp";
import logoMini from "@/assets/images/hero/hero-logo.png";

export const About = () => {
  return (
    <section className="about">
      <div className="about__container">


        <div className="about__content">
            <div className="about__header">
            <div className="about__title">
             <span className="about__title-letter">О</span>
            <span className="about__title-text">нас</span>
            </div>
          <div className="about__card">
            <p>
              Мы анализируем все предложения рынка под Ваш запрос, подбираем
              лучшие объекты, помогаем с ипотекой и полностью сопровождаем
              сделку — от первого звонка до передачи ключей.
            </p>
            <p>
              Мир недвижимости так разнообразен. Мы поможем Вам не заблудиться
              и принять верное решение. Сопроводим на всех этапах сделки,
              предложим самые выгодные условия по ипотеке.
            </p>
            <p>
              Ремонт от компании{" "}
              <img src={logoMini} alt="Дворецкий" className="about__inline-logo" />{" "}
              — современные решения доступны каждому. В нашем каталоге вы
              найдете ремонты любого класса: от бюджетных до премиум класса!
            </p>
            <p>
              Полноценный сервис подбора, покупки и реализации квартир «под
              ключ»: от отделки и меблировки до хоумстейджинга в ипотеку.
            </p>
          </div>
          </div>

          <div className="about__image-wrapper">
            <img src={aboutImage} alt="Интерьер спальни" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
};