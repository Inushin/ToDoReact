import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
mutation createPerson($username: String!, $password: String!) {
  CrearUsuario(
    creacionUsuario: { username: $username, password: $password }
  ) {
    username
    id
  }
}
`;