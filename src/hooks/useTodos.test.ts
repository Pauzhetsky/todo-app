import { renderHook, act } from "@testing-library/react";
import { useTodos } from "../hooks/useTodos";

describe("useTodos hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("initializes with empty array", () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
  });

  test("adds new todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("New task");
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe("New task");
    expect(result.current.todos[0].completed).toBe(false);
  });

  test("does not add empty todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("   ");
    });

    expect(result.current.todos).toHaveLength(0);
  });

  test("toggles todo status", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Task 1");
      result.current.toggleTodo(result.current.todos[0].id);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  test("clears completed todos", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Task 1");
      result.current.addTodo("Task 2");
      result.current.toggleTodo(result.current.todos[0].id);
      result.current.clearCompleted();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe("Task 2");
  });
});
