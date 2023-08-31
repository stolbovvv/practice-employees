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
      filterType: 'All',
      data: [
        { id: 1, name: 'John C.', salary: 1000, vacation: false, promotion: false },
        { id: 2, name: 'Alex M.', salary: 2000, vacation: false, promotion: false },
        { id: 3, name: 'Carl W.', salary: 3000, vacation: false, promotion: false },
        { id: 4, name: 'Anna S.', salary: 5000, vacation: false, promotion: false },
      ],
    };
    this.lastID = 4;
  }

  changeFilterType = (type) => this.setState({ filterType: type });
  changeSearchTerm = (term) => this.setState({ searchTerm: term });

  updateEmployee = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        } else {
          return { ...item };
        }
      }),
    }));
  };

  addEmployee = (name, salary) => {
    this.setState(({ data }) => ({
      data: [
        ...data,
        {
          id: ++this.lastID,
          name: name,
          salary: salary,
          vacation: false,
          promotion: false,
        },
      ],
    }));
  };

  delEmployee = (id) => {
    this.setState(({ data }) => ({ data: data.filter((item) => item.id !== id) }));
  };

  udateDataByFilter = (data, value) => {
    switch (value) {
      case 'Vacation':
        return data.filter((item) => item.vacation);

      case 'Promotion':
        return data.filter((item) => item.promotion);

      default:
        return data;
    }
  };

  udateDataBySearch = (data, value) => {
    return data.filter((item) => item.name.match(new RegExp(value, 'i')));
  };

  render() {
    const { data, searchTerm, filterType } = this.state;
    const view = this.udateDataByFilter(this.udateDataBySearch(data, searchTerm), filterType);

    return (
      <div className="app">
        <Header data={data} />
        <div className="app__list">
          <div className="app__controls">
            <Search searchTerm={searchTerm} onChangeSearchTerm={this.changeSearchTerm} />
            <Filter filterType={filterType} onChangeFilterType={this.changeFilterType} />
          </div>
          <List data={view} onUpdateEmployee={this.updateEmployee} onDelEmployee={this.delEmployee} />
        </div>
        <Form onAddEmployee={this.addEmployee} />
        <Footer />
      </div>
    );
  }
}

export default App;
