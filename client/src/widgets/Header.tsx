import './Header.css'
import menuIcon from '@/assets/icons/menu-icon.png'
import logo from "@/assets/images/hero/hero-logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__center">
        <img src={logo} alt="logo" className="header__logo" />
        {/* <h1 className="header__logo-text">Дворецкий</h1> */}
        <p className="header__subtitle">
          управляющий вашими инвестициями и активами
        </p>
      </div>

      <button className="header__menu">
        <img src={menuIcon} alt="menu" />
        <p className='header_menu_text'>МЕНЮ</p>
      </button>
    </header>
  )
}