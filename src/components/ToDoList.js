import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

const FIND_TODO = gql`
  query findToDoByToDoId($idTodo: Float!) {
    todosById(id: $idTodo) {
      id_todo
      actividad
    }
  }
`;

const ToDos = ({ todos }) => {
  const [getTodo, result] = useLazyQuery(FIND_TODO);
  const [todo, setTodo] = useState(null);

  console.log(todo)

  const showTodo = (id_todo) => {
    getTodo({ variables: { idTodo: id_todo } });
  };

  useEffect(() => {
    if (result.data) {
      setTodo(result.data.todosById);
    }
  }, [result]);


//Solo setea una vez el null en lugar de dos y no vuelve atrás.
  if (todo) {
    return (
      <div>
        <h2>{todo[0].actividad}</h2>
        <button onClick={() => setTodo(null)  }>Close</button>
      </div>
    );
  }

  if (todos === undefined) return null;

  return (
    <div>
      <h2>ToDos</h2>
      {todos.map((todo) => (
        <div
          key={todo.id_todo}
          onClick={() => {
            showTodo(todo.id_todo);
          }}
        >
          {todo.actividad}
        </div>
      ))}
    </div>
  );
};


export default ToDos;
