import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Search } from './components/search/search';
import { Filter } from './components/filter/filter';
import { List } from './components/list/list';
import { Form } from './components/form/form';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__list">
        <div className="app__controls">
          <Search />
          <Filter />
        </div>
        <List />
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export { App };
