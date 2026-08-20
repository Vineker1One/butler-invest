// src/pages/Home/sections/ContactForm/ContactForm.tsx
import "./ContactForm.css";
import { useState } from "react";
import imgContact from "@/assets/images/contactForm/ContactForm.webp";

const MustacheIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="32" viewBox="0 0 45 32" fill="none">
  <path d="M38.2194 14.5312C37.6487 13.6608 36.254 13.1172 35.2146 13.7672C34.3 14.3373 34.0051 15.4168 34.5721 16.2872C34.8253 16.6711 35.3016 16.8916 35.6493 16.7661C35.585 16.7129 35.5283 16.6673 35.4716 16.6217C34.9425 16.1998 34.8745 15.4282 35.3167 14.9341C35.7891 14.4095 36.5866 14.3905 37.078 14.8505C37.6751 15.413 37.6222 16.424 37.2103 16.9714C36.5375 17.8646 35.5964 18.1497 34.5381 18.1345C33.4949 18.1154 32.5576 17.743 31.6996 17.1766C30.9966 16.7129 30.3276 16.196 29.651 15.6905C28.7137 14.9873 27.6894 14.4666 26.5442 14.2233C25.1949 13.9344 23.9287 14.1511 22.7948 14.9759C22.5189 15.1773 22.277 15.4206 22.02 15.6448C21.5589 14.9987 20.8786 14.5198 20.0584 14.2879C18.505 13.847 17.0158 14.1435 15.6514 14.9265C14.7518 15.4472 13.9317 16.1124 13.0888 16.7319C12.1061 17.4579 11.0743 18.0622 9.827 18.1763C8.6969 18.2789 7.69908 18.0014 6.96206 17.0702C6.5274 16.5191 6.50472 15.7019 6.8978 15.1431C7.19639 14.7212 7.61215 14.5198 8.1224 14.6072C8.61374 14.6908 8.95013 14.9873 9.07108 15.4776C9.1958 15.9907 9.01816 16.4088 8.59863 16.7243C8.55705 16.7547 8.53059 16.8003 8.49658 16.8383C8.50792 16.8649 8.52303 16.8916 8.53437 16.9182C8.74603 16.8535 8.98415 16.8307 9.15801 16.7167C9.69849 16.3594 9.92527 15.8197 9.83834 15.1811C9.72873 14.3563 8.75359 13.5391 7.71042 13.5619C6.53496 13.5847 5.8055 14.6642 5.59384 15.3446C5.43132 15.8577 5.47289 16.4316 5.47667 16.4811C5.50691 16.8687 5.60518 17.1614 5.66565 17.3401C5.77526 17.6631 5.92266 17.9672 6.10787 18.2599C6.95828 19.5788 8.19043 20.4036 9.61912 20.9661C11.5921 21.7415 13.6368 21.962 15.727 21.6503C17.904 21.3272 19.8543 20.491 21.4455 18.9174C21.6761 18.6894 21.8802 18.4309 22.1069 18.1801C22.141 18.2143 22.1674 18.2333 22.1863 18.2561C23.1123 19.4686 24.3294 20.2972 25.7202 20.8407C29.1672 22.19 32.5576 22.076 35.8345 20.2744C36.991 19.6396 37.9397 18.7654 38.4235 17.4921C38.8166 16.4887 38.843 15.489 38.2194 14.5312Z" fill="black"/>
</svg>
);

interface ServiceOption {
  value: string;
  label: string;
}

const serviceOptions: ServiceOption[] = [
  { value: "private", label: "Инвестиция в частную недвижимость" },
  { value: "commercial", label: "Инвестиция в коммерческую недвижимость" },
  { value: "renovation", label: "Выгодный ремонт вашей квартиры" },
  { value: "homestaging", label: "Хоумстейджинг" },
  { value: "purchase", label: "Покупка жилья" },
  { value: "tradein", label: "Трейд-ин" },
  { value: "other", label: "Другое" },
];

export const ContactForm = () => {
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isConsent, setIsConsent] = useState(false);
  
  // ✅ Состояния для подсветки ошибок
  const [errors, setErrors] = useState({
    service: false,
    name: false,
    phone: false,
    consent: false,
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    let formatted = "";

    if (value.length > 0) formatted = "+7";
    if (value.length > 1) formatted += ` (${value.slice(1, 4)}`;
    if (value.length > 4) formatted += `) ${value.slice(4, 7)}`;
    if (value.length > 7) formatted += `-${value.slice(7, 9)}`;
    if (value.length > 9) formatted += `-${value.slice(9, 11)}`;

    setPhone(formatted);
    // Убираем ошибку при вводе
    if (errors.phone) setErrors(prev => ({ ...prev, phone: false }));
  };

  const handleServiceSelect = (option: ServiceOption) => {
    setSelectedService(option);
    setIsDropdownOpen(false);
    // Убираем ошибку при выборе
    if (errors.service) setErrors(prev => ({ ...prev, service: false }));
  };

  // ✅ Валидация при клике на кнопку
  const handleButtonClick = () => {
    const newErrors = {
      service: selectedService === null,
      name: name.trim().length === 0,
      phone: phone.trim().length === 0,
      consent: !isConsent,
    };

    setErrors(newErrors);

    // Если есть ошибки, скроллим к первому проблемному полю
    if (newErrors.service || newErrors.name || newErrors.phone || newErrors.consent) {
      setTimeout(() => {
        if (newErrors.service) {
          document.querySelector('.contact-form__select-header');
        } else if (newErrors.name) {
          document.querySelector('#name-input');
        } else if (newErrors.phone) {
          document.querySelector('#phone-input');
        } else if (newErrors.consent) {
          document.querySelector('.contact-form__consent');
        }
      }, 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Финальная проверка
    if (!selectedService || !name.trim() || !phone.trim() || !isConsent) {
      handleButtonClick();
      return;
    }

    console.log({ 
      service: selectedService, 
      name, 
      phone, 
      isConsent 
    });
  };

  return (
    <section className="contact-form">
      <div 
        className="contact-form__bg" 
        style={{ backgroundImage: `url(${imgContact})` }}
      />
      
      <div className="contact-form__container">
        <div className="contact-form__card">
          <h2 className="contact-form__title">Оставить заявку на консультацию</h2>

          <form onSubmit={handleSubmit} className="contact-form__form">
            {/* Выбор услуги */}
            <div className={`contact-form__field ${errors.service ? 'error' : ''}`}>
              <div className="contact-form__select-wrapper">
                <div 
                  className="contact-form__select-header"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Выберите услугу</span>
                  <MustacheIcon />
                </div>

                {isDropdownOpen && (
                  <div className="contact-form__select-dropdown">
                    {serviceOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`contact-form__select-option ${
                          selectedService?.value === option.value ? "active" : ""
                        }`}
                        onClick={() => handleServiceSelect(option)}
                      >
                        <span>{option.label}</span>
                        <MustacheIcon />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {selectedService && (
                <div className="contact-form__select-display">
                  <button
                    type="button"
                    className="contact-form__select-display-btn"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{selectedService.label}</span>
                    <MustacheIcon />
                  </button>
                </div>
              )}
              
              {errors.service && (
                <span className="contact-form__error-message">Выберите услугу</span>
              )}
            </div>

            {/* Имя */}
            <div className={`contact-form__field ${errors.name ? 'error' : ''}`}>
              <label htmlFor="name-input" className="contact-form__label">
                Имя
              </label>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors(prev => ({ ...prev, name: false }));
                }}
                placeholder="Иван Иванов"
                className="contact-form__input"
              />
              {errors.name && (
                <span className="contact-form__error-message">Введите имя</span>
              )}
            </div>

            {/* Телефон */}
            <div className={`contact-form__field ${errors.phone ? 'error' : ''}`}>
              <label htmlFor="phone-input" className="contact-form__label">
                Телефон
              </label>
              <div className="contact-form__phone">
                <span className="contact-form__flag">🇷🇺</span>
                <input
                  id="phone-input"
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (999) 999-99-99"
                  className="contact-form__input contact-form__input--phone"
                />
              </div>
              {errors.phone && (
                <span className="contact-form__error-message">Введите телефон</span>
              )}
            </div>

            {/* Кнопка — теперь type="button" и onClick */}
            <button 
              type="button"
              className="contact-form__button"
              onClick={handleButtonClick}
            >
              Оставить заявку
            </button>

           {/* Согласие */}
          <label className={`contact-form__consent ${errors.consent ? 'error' : ''}`}>
            <input
              type="checkbox"
              checked={isConsent}
              onChange={(e) => {
                setIsConsent(e.target.checked);
                if (errors.consent) setErrors(prev => ({ ...prev, consent: false }));
              }}
            />
            <span>
              Я соглашаюсь с{" "}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                политикой конфиденциальности
              </a>{" "}
              и{" "}
              <a href="/personal-data-processing" target="_blank" rel="noopener noreferrer">
                правилами обработки персональных данных
              </a>.
            </span>
          </label>
          {errors.consent && (
            <span className="contact-form__error-message contact-form__error-message--consent">
              Необходимо согласие на обработку данных
            </span>
          )}
          </form>
        </div>
      </div>
    </section>
  );
};