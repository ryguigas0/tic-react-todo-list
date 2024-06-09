import { Link } from "react-router-dom";
import style from "./Header.module.css";

export function Header(props) {
  return (
    <div className={style.Header}>
      <Link to="/">
        <h1>
          <span>TODO</span> List
        </h1>
      </Link>
      <Link to="/about">About us</Link>
    </div>
  );
}
