import "./Contacts/ContactsPage.css";
import contactBg from "@/assets/images/contacts/contacts-bg.webp";
import { ContactFormPage } from "./Contacts/ContactFormPage";
import { ContactInfoPage } from "./Contacts/ContactInfoPage"

export const ContactsPage = () => {
    return (
        <section className="contacts-page">
            {/* Фоновое изображение */}
            <div className="contacts-bg">
                <img src={contactBg} alt="" className="contacts-bg__image" />
                <div className="contacts-bg__overlay" />
            </div>

            {/* Контент */}
            <div className="contacts-page__content">
                {/* Кнопки */}
                <div className="contacts-page__buttons">
                    <a
                        href="tel:+79034075500"
                        className="contacts-page__button"
                    >
                        Позвонить
                    </a>
                    <a
                        href="https://wa.me/79034075500"
                        className="contacts-page__button"
                    >
                        Написать
                    </a>
                </div>

                {/* Форма заявки */}
                <ContactFormPage />

                {/* Контакты с картой */}
                <ContactInfoPage />
            </div>
        </section>
    );
};
