import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FloatingMenuButton.css";
import menuIcon from "@/assets/icons/menu-icon.png";

const NAV_ITEMS = [
    { label: "Главная", path: "/" },
    { label: "Услуги", path: "/services" },
    { label: "Инвестиционный план", path: "/plan" },
    { label: "Вопросы и ответы", path: "/problems" },
    { label: "Портфолио", path: "/portfolio" },
    { label: "Калькулятор", path: "/calculator" },
    { label: "Контакты", path: "/contacts" },
];

export const FloatingMenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === "/") {
        return null;
    }


    const handleNavigation = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <>
            {/* Кнопка меню — всегда видна */}
            <button
                className={`floating-menu-btn ${isOpen ? "floating-menu-btn--active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Меню"
            >
                <img src={menuIcon} alt="menu" className="floating-menu-btn__icon" />
                <span className="floating-menu-btn__text">
                    {isOpen ? "ЗАКРЫТЬ" : "МЕНЮ"}
                </span>
            </button>

            {/* Выпадающее меню */}
            <nav className={`floating-menu-nav ${isOpen ? "floating-menu-nav--visible" : ""}`}>
                <ul className="floating-menu-nav__list">
                    {NAV_ITEMS.map((item) => (
                        <li
                            key={item.path}
                            className={`floating-menu-nav__item ${
                                location.pathname === item.path ? "floating-menu-nav__item--active" : ""
                            }`}
                        >
                            <a
                                href="#"
                                className="floating-menu-nav__link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.path);
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Затемнение фона */}
            {isOpen && (
                <div
                    className="floating-menu-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};