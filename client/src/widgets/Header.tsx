import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import menuIcon from "@/assets/icons/menu-icon.png";
// import logo from "@/assets/images/hero/hero-logo.png";

// const NAV_ITEMS = [
//     "Услуги",
//     "Инвестиционный план",
//     "Частые вопросы",
//     "Калькулятор доходности",
//     "Портфолио",
//     "Контакты",
// ];

const NAV_ITEMS = [
    {
        label: "Услуги",
        path: "/services",
    },
    {
        label: "Инвестиционный план",
        path: "/plan",
    },
    {
        label: "Вопросы и ответы",
        path: "/problems",
    },
    {
        label: "Портфолио",
        path: "/portfolio",
    },
    {
        label: "Калькулятор",
        path: "/calculator",
    },
    { 
        label: "Контакты", 
        path: "/contacts" 
    },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className={`header ${isOpen ? "header--open" : ""}`}>
            <div className="header__center">
                <p className="header__logo-text" >
                    ДВОРЕЦКИЙ
                </p>
                <p className="header__subtitle">
                    управляющий вашими инвестициями и активами
                </p>
            </div>

            <button className="header__menu" onClick={() => setIsOpen(!isOpen)}>
                <img src={menuIcon} alt="menu" />
                <p className="header_menu_text">
                    {isOpen ? "ЗАКРЫТЬ" : "МЕНЮ"}
                </p>
            </button>

            {/* Выпадающее меню */}
            <nav
                className={`header__nav ${isOpen ? "header__nav--visible" : ""}`}
            >
                <ul className="header__nav-list">
                    {NAV_ITEMS.map((item, index) => (
                        <li key={index} className="header__nav-item">
                            <a
                                href="#"
                                className="header__nav-link"
                                onClick={(e) => {
                                    e.preventDefault();

                                    navigate(item.path);
                                    setIsOpen(false);
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Затемнение фона при открытом меню */}
            {isOpen && (
                <div
                    className="header__overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
};
