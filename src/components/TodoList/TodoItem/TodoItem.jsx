import { useState } from "react";
import { SubmitButton, TextInput } from "../../../components";
import { useAppContext } from "../../../hooks";

import style from "./TodoItem.module.css";

export function TodoItem({ id, todo }) {
  const { removeTodo, updateTodo } = useAppContext();
  const [editing, setEditing] = useState(false);
  const [editingTodoValue, setEditingTodoValue] = useState(todo);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  function startEditMode(clicks) {
    if (clicks == 2 && !deleteLoading) {
      setEditing(true);
    }
  }

  async function endEditMode() {
    if (!updateLoading) {
      setUpdateLoading(true);
      await updateTodo(id, editingTodoValue);
      setEditing(false);
      setUpdateLoading(false);
    }
  }

  async function deleteTodo() {
    if (!deleteLoading) {
      setDeleteLoading(true);
      await removeTodo(id);
      setDeleteLoading(false);
    }
  }

  return (
    <li className={style.TodoItem} onClick={(e) => startEditMode(e.detail)}>
      <SubmitButton text={deleteLoading? "🔄️" : "X"} onClick={() => deleteTodo()} />
      {editing ? (
        <>
          <TextInput
            value={editingTodoValue}
            onChange={(e) => setEditingTodoValue(e.currentTarget.value)}
            onBlur={() => endEditMode()}
            autoFocus
          />
          {updateLoading && "🔄️"}
        </>
      ) : (
        todo
      )}
    </li>
  );
}
