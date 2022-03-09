import { useMutation } from "@apollo/client";
import { CREATE_PERSON, LOGIN_USER } from "./graphql-mutations";


export const UseCreateUser = () => {
  const result = useMutation(CREATE_PERSON);
  return result;
};

export const LoginUser = () => {
  const result = useMutation(LOGIN_USER);
  return result;
};
