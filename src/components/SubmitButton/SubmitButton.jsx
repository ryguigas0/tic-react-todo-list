import style from "./SubmitButton.module.css";

export function SubmitButton({ text, type = "primary", ...otherProps }) {
  return (
    <button className={style.SubmitButton} btntype={type} {...otherProps}>
      {text}
    </button>
  );
}
