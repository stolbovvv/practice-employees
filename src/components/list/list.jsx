import { ListItem } from '../list-item/list-item';
import './list.css';

function List() {
  return (
    <ul className="list">
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
}

export { List };
