import { TodoList } from "../components/TodoList";
import { Footer } from "../components/Footer";
import { useTodosContext } from "../context/TodosContext";
import { useFilteredTodos } from "../hooks/useFilteredTodos";

export const ActiveTodos = () => {
  const {
    activeCount,
    completedCount,
    clearCompleted,
    filter,
    setFilter,
    toggleTodo,
    deleteTodo,
  } = useTodosContext();

  const filteredTodos = useFilteredTodos();
  const activeTodos = filteredTodos.filter((todo) => !todo.completed);

  return (
    <>
      <TodoList
        todos={activeTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </>
  );
};
