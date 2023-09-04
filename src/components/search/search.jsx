import { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  updateSearch = (e) => {
    const term = e.target.value;

    this.setState({ searchTerm: term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <div className="search">
        <input
          className="search__input input-text"
          type="search"
          placeholder="Type to search..."
          value={this.state.searchTerm}
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}

export { Search };
