import { Component } from 'react';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Search } from './components/search/search';
import { Filter } from './components/filter/filter';
import { List } from './components/list/list';
import { Form } from './components/form/form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterType: 'all',
      data: [
        { id: 1, name: 'John C.', salary: 1000, vacation: false, promotion: false },
        { id: 2, name: 'Alex M.', salary: 2000, vacation: false, promotion: false },
        { id: 3, name: 'Carl W.', salary: 3000, vacation: false, promotion: false },
        { id: 4, name: 'Anna S.', salary: 5000, vacation: false, promotion: false },
      ],
    };
    this.lastID = 4;
  }

  handleDelite = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  handleAdding = ({ name, salary }) => {
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          {
            id: ++this.lastID,
            name,
            salary: salary ? salary : 0,
            vacation: false,
            promotion: false,
          },
        ],
      };
    });
  };

  toggleVacation = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, vacation: !item.vacation };
        } else {
          return item;
        }
      }),
    }));
  };

  toggleProperty = (id, property) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [property]: !item[property] };
        } else {
          return item;
        }
      }),
    }));
  };

  handleSearch = (items, term) => {
    if (!term.length) return items;

    return items.filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()));
  };

  handleFilter = (items, type) => {
    switch (type) {
      case 'vacation':
        return items.filter(({ vacation }) => vacation);
      case 'promotion':
        return items.filter(({ promotion }) => promotion);

      default:
        return items;
    }
  };

  updateSearch = (term) => {
    this.setState({ searchTerm: term });
  };

  updateFilter = (type) => {
    this.setState({ filterType: type });
  };

  render() {
    const { data, searchTerm, filterType } = this.state;
    const viewData = this.handleFilter(this.handleSearch(data, searchTerm), filterType);

    return (
      <div className="app">
        <Header data={data} />
        <div className="app__list">
          <div className="app__controls">
            <Search onUpdateSearch={this.updateSearch} />
            <Filter onUpdateFilter={this.updateFilter} filterType={filterType} />
          </div>
          <List data={viewData} onDelete={this.handleDelite} onToggleProperty={this.toggleProperty} />
        </div>
        <Form onAdding={this.handleAdding} />
        <Footer />
      </div>
    );
  }
}

export default App;
