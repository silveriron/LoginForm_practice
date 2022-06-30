import { useContext } from "react";
import AuthContext from "../../Context/Auth-Context";
import style from "./Header.module.css";

const Header = () => {
  const ctx = useContext(AuthContext);

  const logOut = () => {
    ctx.setIsLogin(false);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href="/">리액트</a>
      </div>
      <ul className={style.navbar}>
        <li>
          <a href="#" onClick={logOut}>
            로그아웃
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
