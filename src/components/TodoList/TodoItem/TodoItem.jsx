import { SubmitButton } from "../../../components";

import style from "./TodoItem.module.css";

export function TodoItem({ todo }) {
  return (
    <li className={style.TodoItem}>
      <SubmitButton text="X" />
      {todo}
    </li>
  );
}
