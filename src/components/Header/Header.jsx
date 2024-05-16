import style from './Header.module.css'

export function Header(props) {
  return (
    <div className={style.Header}>
      <h1>
        <span>TODO</span> List
      </h1>
    </div>
  );
}
