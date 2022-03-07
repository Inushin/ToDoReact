import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const CREATE_TODO = gql`
  mutation createTodo($actividad: String!) {
    CrearToDo(nuevoToDo: { actividad: $actividad, user: 1 }) {
      actividad
      id_todo
    }
  }
`;

const RegistroTodo = () => {
  const [actividad, setActividad] = useState("");
  const [createTodo] = useMutation(CREATE_TODO);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTodo({ variables: { actividad } });

    setActividad("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="ToDO"
        value={actividad}
        onChange={(evt) => setActividad(evt.target.value)}
      ></input>
      <button className="todo-button" type="submit">
        {" AGREGAR "}
      </button>
    </form>
  );
};

export default RegistroTodo;
