import { FilterType } from "../types";

interface FooterProps {
  activeCount: number;
  completedCount: number;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  clearCompleted: () => void;
}

export const Footer = ({
  activeCount,
  completedCount,
  filter,
  setFilter,
  clearCompleted,
}: FooterProps) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>
      <ul className="filters">
        <li>
          <a
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};
