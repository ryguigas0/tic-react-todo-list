import { createContext, useEffect, useState } from "react";
import { generateId } from "../util/generateId";
import { api } from "../services";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [creator, setCreator] = useState("Guilherme");

  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const response = await api.get("/todos");

    // console.log({ response });

    if (response.status === 200) {
      setTodos([...response.data]);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (todoName) => {
    if (!todoName) return;

    // const newTodo = {
    //   todo: todoName,
    //   id: generateId(),
    // };

    // setTodos([...todos, newTodo]);

    const response = await api.post("/todos", { todo: todoName });

    if (response.status === 201) {
      const newTodo = response.data;

      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = async (todoId) => {
    const response = await api.delete("/todos/" + todoId);

    if (response.status === 200) {
      setTodos((currTodos) => {
        const newTodoList = currTodos.filter((t) => t.id !== todoId);

        return [...newTodoList];
      });
    }
  };

  const updateTodo = async (todoId, newTodovalue) => {
    const response = await api.put("/todos/" + todoId, {
      todo: newTodovalue,
    });

    if (response.status === 200) {
      setTodos((currTodos) => {
        const newTodoList = currTodos.map((t) =>
          t.id === todoId ? { ...t, todo: newTodovalue } : t
        );

        return [...newTodoList];
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ creator, todos, addTodo, removeTodo, updateTodo }}
    >
      {children}
    </AppContext.Provider>
  );
}
