import { useEffect, useReducer } from "react";
import style from "./Login.module.css";

const checkReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_SAVE":
      return {
        email: action.value,
        password: state.password,
        form: state.form,
      };
    case "PASSWORD_SAVE":
      return {
        email: state.email,
        password: action.value,
        form: state.form,
      };
    case "FORM_VALID":
      return {
        email: state.email,
        password: state.password,
        form: true,
      };
    default:
      throw new Error();
  }
};

const Login = () => {
  const [checkLogin, dispatchCheck] = useReducer(checkReducer, {
    email: "",
    password: "",
    form: false,
  });

  const emailInput = (e) => {
    dispatchCheck({ type: "EMAIL_SAVE", value: e.target.value });
  };

  const passwordInput = (e) => {
    dispatchCheck({ type: "PASSWORD_SAVE", value: e.target.value });
  };

  useEffect(() => {
    const email = checkLogin.email.trim();
    const password = checkLogin.password.trim();
    const check = setTimeout(() => {
      if (email.includes("@") && email.length >= 6 && password.length >= 6) {
        dispatchCheck({ type: "FORM_VALID" });
      }
    }, 500);

    return () => {
      clearTimeout(check);
    };
  }, [checkLogin.email, checkLogin.password]);

  return (
    <form className={style.loginForm}>
      <div>
        <label htmlFor="email">이메일</label>
        <input name="email" id="email" type="email" onInput={emailInput} />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          id="password"
          type="password"
          onInput={passwordInput}
        />
      </div>
      <div>
        <button disabled={checkLogin.form === false && "disabled"}>
          로그인
        </button>
      </div>
    </form>
  );
};

export default Login;
