import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

function Login() {
  const [loginUserInfo, setLoginUserInfo] = useState({
    username: '',
    password: '',
  });
  
  const { registeredUserInfo, setRegisteredUserInfo } = useContext(LoginContext);

  useEffect(() => {
    console.log(registeredUserInfo)
  }, [registeredUserInfo]);

  function inputChange({ target }) {
    const { name, value } = target;
    setLoginUserInfo({
      ...loginUserInfo,
      [name]: value,
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    setRegisteredUserInfo(loginUserInfo);

  }

  if (registeredUserInfo.username !== '' || registeredUserInfo.password !== '') {
    return <Redirect to="/profile" />
  }

  return (
    <form onSubmit={(e) => submitLogin(e)}>
      <label htmlFor="">
        User
        <input
          type="text"
          name="username"
          value={loginUserInfo.username}
          placeholder="insira seu nome de usuario"
          onChange={(e) => inputChange(e)}
        />
      </label>
      <label htmlFor="">
        Senha
        <input
          type="password"
          name="password"
          value={loginUserInfo.password}
          placeholder="insira sua senha"
          onChange={(e) => inputChange(e)}
        />
      </label>
      <button>Entrar</button>
    </form>
  );
}

export default Login;
