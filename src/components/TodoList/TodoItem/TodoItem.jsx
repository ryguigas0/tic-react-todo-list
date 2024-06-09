import { SubmitButton } from "../../../components";

import style from "./TodoItem.module.css";

export function TodoItem({ todo }) {
  return (
    <li className={style.TodoItem}>
      {todo}
      <SubmitButton text="Ok" />
    </li>
  );
}
