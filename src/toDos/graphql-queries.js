import { gql } from "@apollo/client";

export const FIND_TODO = gql`
  query findToDoByToDoId($idTodo: Float!) {
    todosById(id: $idTodo) {
      id_todo
      actividad
    }
  }
`;

export const ALL_TODOS = gql`
  query {
    todos {
      id_todo
      actividad
      finalizada
    }
  }
`;

export const FIND_TODO_BY_USER = gql`
  query findToDoByUserId($idUsuario: Float!) {
    todosByUserId(userId: $idUsuario) {
      actividad
      id_todo
    }
  }
`;
