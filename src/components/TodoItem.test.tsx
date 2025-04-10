import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";

describe("TodoItem", () => {
  const mockTodo = {
    id: "1",
    text: "Test todo",
    completed: false,
  };

  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  test("renders todo item", () => {
    render(
      <TodoItem {...mockTodo} toggleTodo={mockToggle} deleteTodo={mockDelete} />
    );

    expect(screen.getByText("Test todo")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("calls toggle when clicked", () => {
    render(
      <TodoItem {...mockTodo} toggleTodo={mockToggle} deleteTodo={mockDelete} />
    );

    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockToggle).toHaveBeenCalledWith("1");
  });

  test("calls delete when button clicked", () => {
    render(
      <TodoItem {...mockTodo} toggleTodo={mockToggle} deleteTodo={mockDelete} />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockDelete).toHaveBeenCalledWith("1");
  });
});
