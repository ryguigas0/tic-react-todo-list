import { SubmitButton, TextInput } from "../../components";
import style from './CreateTodoForm.module.css'

export function CreateTodoForm() {
  return (
    <div className={style.CreateTodoForm}>
      <TextInput />
      <SubmitButton text="+" type="primary" />
    </div>
  );
}
