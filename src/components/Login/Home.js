import Button from "./includes/Button";
import style from "./Home.module.css";
import { useContext } from "react";
import AuthContext from "../../Context/Auth-Context";

const Home = () => {
  const ctx = useContext(AuthContext);

  const logOut = () => {
    ctx.setIsLogin(false);
  };

  return (
    <div className={style.home}>
      <h1>정상적으로 로그인 되었습니다.</h1>
      <Button type="button" name="로그아웃" onClick={logOut} />
    </div>
  );
};

export default Home;
