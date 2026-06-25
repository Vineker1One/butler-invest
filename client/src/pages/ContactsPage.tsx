import "./Contacts/ContactsPage.css";
import contactBg from "@/assets/images/contacts/contacts-bg.webp";
import { ContactFormPage } from "./Contacts/ContactFormPage";
import { ContactInfoPage } from "./Contacts/ContactInfoPage"

export const ContactsPage = () => {
    const scrollToContactInfo = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById("contact-info");
        if (element) {
            element.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }
    };

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
                        href="#contact-info"
                        className="contacts-page__button"
                        onClick={scrollToContactInfo}
                    >
                        Позвонить
                    </a>
                    <a
                        href="https://max.ru/u/f9LHodD0cOLoIfOQwYgpURXQyNkpjK2hbEPjA4IM26rcHl59By9yzPfiask"
                        className="contacts-page__button"
                    >
                        Написать
                    </a>
                </div>

                {/* Форма заявки */}
                <ContactFormPage />

                {/* Контакты с картой */}
                <div id="contact-info">
                    <ContactInfoPage />
                </div>
            </div>
        </section>
    );
};
