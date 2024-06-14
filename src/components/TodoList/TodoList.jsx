import { TodoItem } from "../../components";

import style from "./TodoList.module.css";

import { useAppContext } from "../../hooks";

export function TodoList() {
  const { todos } = useAppContext();

  if (todos === null)
    return (
      <>
        <h3>🔄️ Loading your todos...</h3>
      </>
    );

  if (todos.length === 0)
    return (
      <>
        <h3>There are no todos, greate job!</h3>
      </>
    );

  return (
    <ul className={style.TodoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.todo} />
      ))}
    </ul>
  );
}
