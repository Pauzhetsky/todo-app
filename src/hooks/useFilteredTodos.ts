import { useTodosContext } from "../context/TodosContext";
import type { Todo } from "../types";

export const useFilteredTodos = (): Todo[] => {
  const { todos, filter } = useTodosContext();

  return todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default: // 'all'
        return true;
    }
  });
};
