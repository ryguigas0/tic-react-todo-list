import { createContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [creator, setCreator] = useState("Guilherme");

  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Todo 1",
    },
    {
      id: 2,
      todo: "Todo 2",
    },
    ,
    {
      id: 3,
      todo: "Todo 3",
    },
  ]);

  const addTodo = (todoName) => {
    if (!todoName) return;

    const newTodo = {
      todo: todoName,
      id: todos.length + 1,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos((currTodos) => {
      const newTodoList = currTodos.filter((t) => t.id !== todoId);

      return [...newTodoList];
    });
  };

  return (
    <AppContext.Provider value={{ creator, todos, addTodo, removeTodo }}>
      {children}
    </AppContext.Provider>
  );
}
