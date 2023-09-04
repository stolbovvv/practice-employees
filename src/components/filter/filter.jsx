import './filter.css';

function Filter({ filterType, onUpdateFilter }) {
  const buttons = [
    { id: 1, type: 'all', label: 'All' },
    { id: 2, type: 'vacation', label: 'Vacation' },
    { id: 3, type: 'promotion', label: 'Promotion' },
  ];

  return (
    <div className="filter">
      {buttons.map(({ id, type, label }) => {
        const calssModifer = type === filterType ? ' filter__button-item_is-current' : '';

        return (
          <button key={id} className={'filter__button-item' + calssModifer} onClick={() => onUpdateFilter(type)}>
            {label}
          </button>
        );
      })}
    </div>
  );
}

export { Filter };
