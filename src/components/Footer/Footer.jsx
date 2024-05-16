import style from "./Footer.module.css"

export function Footer({ creatorName }) {
  return <div className={style.Footer}>React Basics - 2024 - {creatorName}</div>;
}
