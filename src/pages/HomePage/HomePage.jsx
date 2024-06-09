import { useState } from "react";
import { CreateTodoForm, TodoList } from "../../components";

import style from "./HomePage.module.css";

export function HomePage(props) {
  return (
    <div className={style.HomePage}>
      <CreateTodoForm />
      <TodoList />
    </div>
  );
}
