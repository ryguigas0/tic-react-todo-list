import { useState } from "react";
import { SubmitButton, TextInput } from "../../components";
import style from "./CreateTodoForm.module.css";

export function CreateTodoForm({ todos, setTodos }) {
  const [todoName, setTodoName] = useState("Create an todo!");

  const addTodo = (e) => {
    e.preventDefault();

    if (!todoName) return;

    const newTodoList = [].concat(todos, [
      {
        todo: todoName,
        id: todos.length + 1,
      },
    ]);

    setTodos(newTodoList);
  };

  return (
    <form className={style.CreateTodoForm} onSubmit={addTodo}>
      <TextInput
        value={todoName}
        onChange={(e) => setTodoName(e.currentTarget.value)}
      />
      <SubmitButton text="+" type="primary" />
    </form>
  );
}
