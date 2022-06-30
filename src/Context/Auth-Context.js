import React, { useState } from "react";

const AuthContext = React.createContext({
  isLogin: "",
  setIsLogin: "",
});

export const AuthProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogin: isLogin,
        setIsLogin: setIsLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
