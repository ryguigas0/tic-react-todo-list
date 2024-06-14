import { useState } from "react";
import { SubmitButton, TextInput } from "../../../components";
import { useAppContext } from "../../../hooks";

import style from "./TodoItem.module.css";

export function TodoItem({ id, todo }) {
  const { removeTodo, updateTodo } = useAppContext();
  const [editing, setEditing] = useState(false);
  const [editingTodoValue, setEditingTodoValue] = useState(todo);

  function startEditMode(clicks) {
    if (clicks == 2) {
      setEditing(true);
    }
  }

  function endEditMode() {
    updateTodo(id, editingTodoValue);
    setEditing(false);
  }

  return (
    <li className={style.TodoItem} onClick={(e) => startEditMode(e.detail)}>
      <SubmitButton text="X" onClick={() => removeTodo(id)} />
      {editing ? (
        <TextInput
          value={editingTodoValue}
          onChange={(e) => setEditingTodoValue(e.currentTarget.value)}
          onBlur={() => endEditMode()}
          autoFocus
        />
      ) : (
        todo
      )}
    </li>
  );
}
