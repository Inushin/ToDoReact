import React, { useEffect, useState } from "react";
import { LoginUser, UseCreateUser } from "../users/custom-hooks";

const LoginUsuario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loginUsuario, result] = LoginUser();
  localStorage.setItem("idUsuario", "7");
  useEffect(() => {
    if (result.data) {
      setToken(result.data.login.access_token);
      console.log(result.data.login.access_token);
      localStorage.setItem("token", "Bearer " + token);
      localStorage.setItem("idUsuario", result.data.login.user.id);

      window.location.reload();
    }
  }, [result]);

  const handleLogin = (e) => {
    e.preventDefault();

    loginUsuario({ variables: { username, password } });
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>LogIn</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Usuario"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        ></input>
        <input
          placeholder="Contraseña"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        ></input>
        <p>{token}</p>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default LoginUsuario;
