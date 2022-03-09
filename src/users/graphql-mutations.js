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

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(loginUserInput: { username: $username, password: $password }) {
      access_token
    }
  }
`;
