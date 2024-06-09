import { TodoItem } from "../../components";

import style from "./TodoList.module.css";

export function TodoList({ todos }) {
  return (
    <ul className={style.TodoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo.todo} />
      ))}
    </ul>
  );
}
