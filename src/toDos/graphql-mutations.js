import { gql } from "@apollo/client";

export const EDIT_TODO = gql`
mutation editarTodo($actividad: String!, $idTodo: Int!) {
  ModificarToDo(
    modificarToDo: { actividad: $actividad, id_todo: $idTodo, user: 1 }
  ) {
    actividad
    finalizada
    id_todo
  }
}
`;

export const ELIMINAR_TODO = gql`
mutation eliminarTodo($idTodo: Int!) {
  BorrarToDo(eliminarToDo: { id_todo: $idTodo }) {
    actividad
    finalizada
    id_todo
  }
}
`;


export const CREATE_TODO = gql`
  mutation createTodo($actividad: String!) {
    CrearToDo(nuevoToDo: { actividad: $actividad, user: 1 }) {
      actividad
      id_todo
    }
  }
`;