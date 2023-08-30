import './filter.css';

function Filter() {
  return (
    <div className="filter">
      <button className="filter__button-item is-current">All</button>
      <button className="filter__button-item">Vacation</button>
      <button className="filter__button-item">Promotion</button>
    </div>
  );
}

export { Filter };
