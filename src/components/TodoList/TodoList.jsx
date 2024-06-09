import { TodoItem } from "../../components";

import style from "./TodoList.module.css";

export function TodoList(props) {
  const todos = [
    {
      id: 1,
      todo: "Todo 1",
    },
    {
      id: 2,
      todo: "Todo 2",
    },
    ,
    {
      id: 3,
      todo: "Todo 3",
    },
  ];

  return (
    <ul className={style.TodoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo.todo} />
      ))}
    </ul>
  );
}
