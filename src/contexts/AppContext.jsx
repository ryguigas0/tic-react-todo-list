import { createContext, useState } from "react";
import { generateId } from "../util/generateId";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [creator, setCreator] = useState("Guilherme");

  const [todos, setTodos] = useState([
    {
      id: generateId(),
      todo: "Todo 1",
    },
    {
      id: generateId(),
      todo: "Todo 2",
    },
    {
      id: generateId(),
      todo: "Todo 3",
    },
  ]);

  const addTodo = (todoName) => {
    if (!todoName) return;

    const newTodo = {
      todo: todoName,
      id: generateId(),
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos((currTodos) => {
      const newTodoList = currTodos.filter((t) => t.id !== todoId);

      return [...newTodoList];
    });
  };

  const updateTodo = (todoId, newTodovalue) => {
    setTodos((currTodos) => {
      const newTodoList = currTodos.map((t) =>
        t.id === todoId ? { ...t, todo: newTodovalue } : t
      );

      return [...newTodoList];
    });
  };

  return (
    <AppContext.Provider
      value={{ creator, todos, addTodo, removeTodo, updateTodo }}
    >
      {children}
    </AppContext.Provider>
  );
}
