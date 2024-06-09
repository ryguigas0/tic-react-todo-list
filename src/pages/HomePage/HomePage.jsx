import { useState } from "react";
import { CreateTodoForm, TodoList } from "../../components";

import style from "./HomePage.module.css";

export function HomePage(props) {
  const [todos, setTodos] = useState([
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
  ]);

  return (
    <div className={style.HomePage}>
      <CreateTodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
