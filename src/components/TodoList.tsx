import React from 'react';
import { ITodo } from './../types/data';
import { TodoItem } from './TodoItem';

interface ITodoListProps {
  items: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, onToggle, onRemove } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem key={todo.id} {...todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
};

export { TodoList };
