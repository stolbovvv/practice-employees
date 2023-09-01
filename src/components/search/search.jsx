import './search.css';

function Search() {
  return (
    <div className="search">
      <input className="search__input input-text" type="search" placeholder="Type to search..." defaultValue="" />
    </div>
  );
}

export { Search };
