import { createContext, useContext } from "react";
import { useTodos } from "../hooks/useTodos";

const TodosContext = createContext<ReturnType<typeof useTodos> | null>(null);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useTodos();
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodosContext must be used within a TodosProvider");
  }
  return context;
};
