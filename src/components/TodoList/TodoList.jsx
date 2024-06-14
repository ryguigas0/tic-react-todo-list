import { TodoItem } from "../../components";

import style from "./TodoList.module.css";

import { useAppContext } from "../../hooks";

export function TodoList() {
  const { todos } = useAppContext();

  console.log({ todos });
  return (
    <ul className={style.TodoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.todo} />
      ))}
    </ul>
  );
}
