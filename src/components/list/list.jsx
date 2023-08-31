import { ListItem } from '../list-item/list-item';
import './list.css';

function List({ data, onUpdateEmployee, onDelEmployee }) {
  return (
    <ul className="list">
      {data.map(({ id, ...data }) => (
        <ListItem key={id} {...data} onDelEmployee={() => onDelEmployee(id)} onUpdateEmployee={(prop) => onUpdateEmployee(id, prop)} />
      ))}
    </ul>
  );
}

export { List };
