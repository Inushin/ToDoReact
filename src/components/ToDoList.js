import React, { useEffect, useState } from "react";
import {
  EditToDo,
  FindToDos,
  FindToDosByUser,
  RemoveToDo,
} from "../toDos/custom-hooks";

const ToDos = () => {
  const [getTodo, resultado] = FindToDos();
  const [todo, setTodo] = useState(null);
  const [todoDetalle, setTodoDetalle] = useState(null);
  const [getTodoByUser, result] = FindToDosByUser();
  const [actividad, setActividad] = useState("");
  const [idTodo, setIdTodo] = useState("");
  const [modificarToDo] = EditToDo();
  const [eliminarToDo] = RemoveToDo();

  const idUsuarioString = localStorage.getItem("idUsuario");
  const idUsuario = parseInt(idUsuarioString);

  const borrarLocal = (e) => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    if (resultado.data) {
      setTodoDetalle(resultado.data.todosById);
    }
  }, [resultado]);

  useEffect(() => {
    showTodoByUser(idUsuario);
    if (result.data) {
      setTodo(result.data);
    }
  }, [result.data]);

  const showTodoByUser = (idUsuario) => {
    getTodoByUser({ variables: { idUsuario: idUsuario } });
  };

  const showTodo = (id_todo) => {
    getTodo({ variables: { idTodo: id_todo } });
  };

  const handleSubmit = async (e) => {
    if (actividad === "") {
      e.preventDefault();
      alert("El texto no ha sido modificado");
    } else {
      const modificado = await modificarToDo({
        variables: { actividad, idTodo },
      });
      alert("Modificado con éxito");
    }

    setActividad("");
    setIdTodo("");
  };

  const handleRemove = (e) => {
    eliminarToDo({ variables: { idTodo } });
    setIdTodo("");
    alert("Eliminado con éxito");
  };

  if (todo && todoDetalle == null) {
    console.log(todo.todosByUserId);
    return (
      <div>
        {todo.todosByUserId.map((todos) => {
          return (
            <h2
              key={todos.id_todo}
              onClick={() => {
                showTodo(todos.id_todo);
              }}
            >
              {todos.actividad}
            </h2>
          );
        })}
        <button onClick={borrarLocal}>Salir</button>
      </div>
    );
  }

  if (todoDetalle) {
    console.log(todoDetalle);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Editando ToDo: {todoDetalle[0].actividad}</h1>
            <input
              placeholder={todoDetalle[0].actividad}
              value={actividad}
              onChange={(evt) => setActividad(evt.target.value)}
            ></input>
            <button onClick={() => setIdTodo(todoDetalle[0].id_todo)}>
              Editar
            </button>
          </div>
        </form>
        <form onSubmit={handleRemove}>
          <div>
            <button onClick={() => setIdTodo(todoDetalle[0].id_todo)}>
              Eliminar
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return <p>Cargando...</p>;
  }
};

export default ToDos;
