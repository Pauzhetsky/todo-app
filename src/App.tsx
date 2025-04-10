import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { AllTodos, ActiveTodos, CompletedTodos } from "./pages";
import { TodosProvider } from "./context/TodosContext";

export const App = () => {
  return (
    <Router>
      <TodosProvider>
        <div className="todoapp">
          <Header />
          <Routes>
            <Route path="/" element={<AllTodos />} />
            <Route path="/active" element={<ActiveTodos />} />
            <Route path="/completed" element={<CompletedTodos />} />
          </Routes>
        </div>
      </TodosProvider>
    </Router>
  );
};
