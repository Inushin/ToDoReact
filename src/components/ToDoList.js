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

  const handleSubmit = (e) => {
    if (actividad == "") {
      e.preventDefault();
      alert("El texto no ha sido modificado");
      //  eliminarToDo({ variables: { idTodo } });
    } else {
      modificarToDo({ variables: { actividad, idTodo } });
    }

    setActividad("");
    setIdTodo("");
  };

  const handleRemove = (e) => {
  
    eliminarToDo({ variables: { idTodo } });
    setIdTodo("");
    alert("Eliminado con éxito")
  };

  //Solo setea una vez el null en lugar de dos y no vuelve atrás.
  if (todo) {
    return (
      <div>
        <h2>Editar ToDO</h2>
        <form onSubmit={handleSubmit}>
          <h2>{todo[0].actividad}</h2>
          <input
            placeholder={todo[0].actividad}
            value={actividad}
            onChange={(evt) => setActividad(evt.target.value)}
          ></input>

          <button onClick={() => setIdTodo(todo[0].id_todo)}>Editar</button>
        </form>
        <form onSubmit={handleRemove}>
          <button onClick={() => setIdTodo(todo[0].id_todo)}>Eliminar</button>
        </form>
        {/* Esta parte no funciona como debería aún
        <button onClick={() => setTodo(null)}>Close</button>*/}
      </div>
    );
  }
  if (todos === undefined) return null;

  return (
    <div>
      <h2>ToDos</h2>
      {todos.map((todo) => (
       
          <p
           key={todo.id_todo}
            onClick={() => {
              showTodo(todo.id_todo);
            }}
          >
            {todo.actividad}
            {todo.id_todo}
          </p>
        
      ))}
    </div>
  );
};

export default ToDos;
