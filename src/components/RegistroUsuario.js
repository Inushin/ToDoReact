import React, { useState } from "react";
import { UseCreateUser } from "../users/custom-hooks";

const RegistroUsuario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [creacionUsuario] = UseCreateUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    creacionUsuario({ variables: { username, password } });

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
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
        <button>Registrarse</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
