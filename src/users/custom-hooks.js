import { useMutation } from "@apollo/client";
import { CREATE_PERSON } from "./graphql-mutations";


export const UseCreateUser = () => {
  const result = useMutation(CREATE_PERSON);
  return result;
};
