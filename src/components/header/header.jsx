import './header.css';

function Header({ data }) {
  const totalCount = data.length;
  const vacationCount = data.filter(({ vacation }) => vacation).length;
  const promotionCount = data.filter(({ promotion }) => promotion).length;

  return (
    <header className="header">
      <div className="header__head">
        <img className="header__logo" src="logo.svg" alt="Employees" />
        <span className="header__title">Employees App</span>
      </div>
      <div className="header__info">
        <ul className="header__list">
          <li className="header__item">
            <span className="header__item-label">Employees</span>
            <span className="header__item-value">{totalCount}</span>
          </li>
          <li className="header__item">
            <span className="header__item-label">Employees on vacation</span>
            <span className="header__item-value">{vacationCount}</span>
          </li>
          <li className="header__item">
            <span className="header__item-label">Employees on promotion</span>
            <span className="header__item-value">{promotionCount}</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export { Header };
