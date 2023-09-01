import { ListItem } from '../list-item/list-item';
import './list.css';

function List({ data, onDelete, onToggleProperty }) {
  return (
    <ul className="list">
      {data.map(({ id, ...data }) => (
        <ListItem key={id} onDelete={() => onDelete(id)} onToggleProperty={(property) => onToggleProperty(id, property)} {...data} />
      ))}
    </ul>
  );
}

export { List };
