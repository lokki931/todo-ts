import React from 'react';
import { ITodo } from './../types/data';
import { TodoList } from './TodoList';

const App: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo();
  };
  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          body: value,
          completed: false,
        },
      ]);
      setValue('');
    }
  };
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  const onToggle = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };
  const onRemove = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
        <button onClick={addTodo}>add</button>
      </div>
      <TodoList items={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
};

export { App };
