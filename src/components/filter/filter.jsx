import './filter.css';

function Filter({ filterType, onChangeFilterType }) {
  const buttons = [
    { id: 1, type: 'All', label: 'All' },
    { id: 2, type: 'Vacation', label: 'Vacation' },
    { id: 3, type: 'Promotion', label: 'Promotion' },
  ];

  return (
    <div className="filter">
      {buttons.map(({ id, type, label }) => (
        <button
          key={id}
          className={'filter__button-item' + (type === filterType ? ' is-current' : '')}
          onClick={() => onChangeFilterType(type)}>
          {label}
        </button>
      ))}
    </div>
  );
}

export { Filter };
