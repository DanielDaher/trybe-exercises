import { useState } from "react";
import LoginContext from "./LoginContext";

export default function LoginProvider({ children }) {
  
  const [registeredUserInfo, setRegisteredUserInfo] = useState({
    username: '',
    password: '',
  });

  const contextValue = {
    registeredUserInfo,
    setRegisteredUserInfo,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}
