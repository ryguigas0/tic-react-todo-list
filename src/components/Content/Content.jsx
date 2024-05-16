import style from "./Content.module.css";

export function Content(props) {
  const { children } = props;
  return <div className={style.Content}>{children}</div>;
}
