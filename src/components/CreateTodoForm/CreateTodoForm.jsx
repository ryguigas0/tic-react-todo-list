import { useState } from "react";
import { SubmitButton, TextInput } from "../../components";
import style from "./CreateTodoForm.module.css";
import { useAppContext } from "../../hooks";

export function CreateTodoForm(props) {
  const { addTodo } = useAppContext();
  const [todoName, setTodoName] = useState("Create an todo!");

  const submit = (e) => {
    e.preventDefault();
    addTodo(todoName);
  };

  return (
    <form className={style.CreateTodoForm} onSubmit={submit}>
      <TextInput
        value={todoName}
        onChange={(e) => setTodoName(e.currentTarget.value)}
      />
      <SubmitButton text="+" type="primary" />
    </form>
  );
}
