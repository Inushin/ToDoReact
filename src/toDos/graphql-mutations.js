import { gql } from "@apollo/client";

export const EDIT_TODO = gql`
mutation editarTodo($actividad: String!, $idTodo: Int!) {
  ModificarToDo(
    modificarToDo: { actividad: $actividad, id_todo: $idTodo }
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
  mutation createTodo($actividad: String!, $idUsuario: Int!) {
    CrearToDo(nuevoToDo: { actividad: $actividad, user: $idUsuario }) {
      actividad
      id_todo
    }
  }
`;