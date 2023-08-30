import './list-item.css';

function ListItem() {
  return (
    <li className="list-item">
      <span className="list-item__name">Employee</span>
      <button className="list-item__button is-active">
        <i className="bx bxs-plane"></i>
      </button>
      <button className="list-item__button">
        <i className="bx bx-euro"></i>
      </button>
      <button className="list-item__button list-item__button_danger">
        <i className="bx bxs-trash"></i>
      </button>
    </li>
  );
}

export { ListItem };
