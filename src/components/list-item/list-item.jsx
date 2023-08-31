import './list-item.css';

function ListItem({ name, salary, vacation, promotion, onUpdateEmployee, onDelEmployee }) {
  return (
    <li className={'list-item' + (promotion ? ' list-item_promotion' : '')}>
      <span className="list-item__name">{name}</span>
      <span className="list-item__salary">{salary} €</span>
      <button className={'list-item__button' + (vacation ? ' is-active' : '')} onClick={() => onUpdateEmployee('vacation')}>
        <i className="bx bxs-plane"></i>
      </button>
      <button className={'list-item__button' + (promotion ? ' is-active' : '')} onClick={() => onUpdateEmployee('promotion')}>
        <i className="bx bx-euro"></i>
      </button>
      <button className="list-item__button list-item__button_danger" onClick={onDelEmployee}>
        <i className="bx bxs-trash"></i>
      </button>
    </li>
  );
}

export { ListItem };
