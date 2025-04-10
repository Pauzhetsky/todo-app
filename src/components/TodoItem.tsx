import { Todo } from "../types";

interface TodoItemProps extends Todo {
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem = ({
  id,
  text,
  completed,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          id={`todo-${id}`}
        />
        <label htmlFor={`todo-${id}`}>{text}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(id)}
          aria-label="Delete task"
        />
      </div>
    </li>
  );
};
