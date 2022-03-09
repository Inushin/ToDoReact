import React, { useState } from "react";
import { CreateToDo } from "../toDos/custom-hooks";

const RegistroTodo = () => {
  const [actividad, setActividad] = useState("");
  const [createTodo] = CreateToDo();

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
