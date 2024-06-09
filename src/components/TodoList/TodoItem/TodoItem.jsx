import { SubmitButton } from "../../../components";
import { useAppContext } from "../../../hooks";

import style from "./TodoItem.module.css";

export function TodoItem({ id, todo }) {
  const { removeTodo } = useAppContext();

  return (
    <li className={style.TodoItem}>
      <SubmitButton text="X" onClick={() => removeTodo(id)} />
      {todo}
    </li>
  );
}
