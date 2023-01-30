import React from 'react';
import { ITodo } from '../types/data';

interface ITodoItemProps extends ITodo {
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { id, body, completed, onToggle, onRemove } = props;
  return (
    <div>
      <input type={'checkbox'} onChange={() => onToggle(id)} checked={completed} />
      <span>{body}</span>
      <button onClick={() => onRemove(id)}>x</button>
    </div>
  );
};

export { TodoItem };
