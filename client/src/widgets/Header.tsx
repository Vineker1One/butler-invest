import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__center">
        <h1 className="header__title">ДВОРЕЦКИЙ</h1>
        <p className="header__subtitle">
          управляющий вашими инвестициями и активами
        </p>
      </div>

      <button className="header__menu">Меню</button>
    </header>
  )
}