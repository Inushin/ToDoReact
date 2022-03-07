import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const CREATE_PERSON = gql`
  mutation createPerson($username: String!, $password: String!) {
    CrearUsuario(
      creacionUsuario: { username: $username, password: $password }
    ) {
      username
      id
    }
  }
`;

const RegistroUsuario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
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
    <button>Add Person</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
