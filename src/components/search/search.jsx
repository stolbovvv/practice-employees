import './search.css';

function Search({ searchTerm, onChangeSearchTerm }) {
  return (
    <div className="search">
      <input
        className="search__input input-text"
        type="search"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => onChangeSearchTerm(e.target.value)}
      />
    </div>
  );
}

export { Search };
