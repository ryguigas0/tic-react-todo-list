import { useState } from "react";
import { SubmitButton, TextInput } from "../../components";
import style from "./CreateTodoForm.module.css";
import { useAppContext } from "../../hooks";

export function CreateTodoForm(props) {
  const { addTodo } = useAppContext();
  const [todoName, setTodoName] = useState("Create an todo!");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      await addTodo(todoName);
      setLoading(false);
    }
  };

  return (
    <form className={style.CreateTodoForm} onSubmit={submit}>
      <TextInput
        value={todoName}
        onChange={(e) => setTodoName(e.currentTarget.value)}
      />
      <SubmitButton text={loading ? "🔄️" : "+"} type="primary" />
    </form>
  );
}
