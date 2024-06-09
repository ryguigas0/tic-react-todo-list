import { useLocation } from "react-router-dom";
import style from "./NotFoundPage.module.css";

export function NotFoundPage(props) {
  const location = useLocation();

  return (
    <div className={style.NotFoundPage}>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <p>
        The page <code>{location.pathname}</code> does not exist!
      </p>
    </div>
  );
}
