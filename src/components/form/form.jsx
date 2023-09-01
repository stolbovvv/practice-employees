import { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      isError: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ isError: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length >= 2) {
      this.props.onAdding({
        name: this.state.name,
        salary: this.state.salary,
      });
      this.setState({
        name: '',
        salary: '',
        isError: false,
      });
    } else {
      this.setState({
        name: '',
        isError: true,
      });
    }
  };

  render() {
    const { name, salary, isError } = this.state;

    return (
      <form className="form" action="" onSubmit={this.handleSubmit}>
        <input
          className={'form__text-input input-text' + (isError ? ' is-error' : '')}
          type="text"
          name="name"
          value={name}
          placeholder={isError ? 'Please type at least 2 characters' : "Type employee's name"}
          onChange={this.handleChange}
        />
        <input
          className="form__text-input input-text"
          type="number"
          name="salary"
          value={salary}
          placeholder="Type employee's salary"
          onChange={this.handleChange}
        />
        <button className="form__button-submit button" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export { Form };
