import { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacation: false,
      promotion: false,
    };
  }

  toggleVacation = () => this.setState(({ vacation }) => ({ vacation: !vacation }));
  togglePromotion = () => this.setState(({ promotion }) => ({ promotion: !promotion }));

  render() {
    const { name, salary } = this.props;
    const { vacation, promotion } = this.state;

    const classModifiers = (vacation ? ' list-item_vacation' : '') + (promotion ? ' list-item_promotion' : '');

    return (
      <li className={'list-item' + classModifiers}>
        <span className="list-item__name" tabIndex="0" onClick={this.togglePromotion}>
          {name}
        </span>
        <span className="list-item__salary">{salary} €</span>
        <button className="list-item__button" onClick={this.toggleVacation}>
          <i className="bx bxs-plane"></i>
        </button>
        <button className="list-item__button list-item__button_danger">
          <i className="bx bxs-trash"></i>
        </button>
        <div className="list-item__icon">
          <i className="bx bx-euro"></i>
        </div>
      </li>
    );
  }
}

export { ListItem };
