import { Airplane, CurrencyEur, Trash } from '@phosphor-icons/react';
import './list-item.css';

function ListItem({ name, salary, vacation, promotion, onDelete, onToggleProperty }) {
  const calssList = (vacation ? ' list-item_is-vacation' : '') + (promotion ? ' list-item_is-promotion' : '');

  return (
    <li className={'list-item' + calssList}>
      <span className="list-item__name" onClick={() => onToggleProperty('promotion')}>
        {name}
      </span>
      <span className="list-item__salary">{salary} €</span>
      <CurrencyEur className="list-item__dynamic-icon" weight="bold" />
      <div className="list-item__buttons">
        <button className="list-item__button list-item__button_action" onClick={() => onToggleProperty('vacation')}>
          <Airplane className="list-item__button-icon" weight={vacation ? 'fill' : 'bold'} />
        </button>
        <button className="list-item__button list-item__button_danger" onClick={onDelete}>
          <Trash className="list-item__button-icon" weight="bold" />
        </button>
      </div>
    </li>
  );
}

export { ListItem };
