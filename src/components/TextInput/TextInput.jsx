import style from "./TextInput.module.css";

export function TextInput(props) {
  return <input className={style.TextInput} type="text" {...props} />;
}
