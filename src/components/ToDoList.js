import React, { useEffect, useState } from "react";
import { EditToDo, FindToDos, RemoveToDo } from "../toDos/custom-hooks";

const ToDos = ({ todos }) => {
  const [getTodo, result] = FindToDos();
  const [todo, setTodo] = useState(null);
  const [actividad, setActividad] = useState("");
  const [idTodo, setIdTodo] = useState("");
  const [modificarToDo] = EditToDo();
  const [eliminarToDo] = RemoveToDo();

  console.log(todo);

  const showTodo = (id_todo) => {
    getTodo({ variables: { idTodo: id_todo } });
  };

  useEffect(() => {
    if (result.data) {
      setTodo(result.data.todosById);
    }
  }, [result]);
  const handleOnClick = (e) => {
    e.preventDefault();
    eliminarToDo({ variables: { idTodo } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    modificarToDo({ variables: { actividad, idTodo } });

    setActividad("");
    setIdTodo("");
  };
  //Solo setea una vez el null en lugar de dos y no vuelve atrás.
  if (todo) {
    return (
      <div>
        <h2>Editar ToDO</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder={todo[0].actividad}
            value={actividad}
            onChange={(evt) => setActividad(evt.target.value)}
          ></input>
          <button onClick={() => setIdTodo(todo[0].id_todo)}>Editar</button>
        </form>
        <h2>{todo[0].actividad}</h2>
        <h3>{todo[0].id_todo}</h3>
        <button onClick={() => setTodo(null)}>Close</button>
      </div>
    );
  }
  if (todos === undefined) return null;

  return (
    <div>
      <h2>ToDos</h2>
      {todos.map((todo) => (
        <div>
          <p
            key={todo.id_todo}
            onClick={() => {
              showTodo(todo.id_todo);
            }}
          >
            {todo.actividad}
            {todo.id_todo}
          </p>
          <button onClick={() => setIdTodo(todo.id_todo)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ToDos;
