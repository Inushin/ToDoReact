import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { CREATE_TODO, EDIT_TODO, ELIMINAR_TODO } from "./graphql-mutations";
import { ALL_TODOS, FIND_TODO } from "./graphql-queries";
import React from "react";

export const UseToDos = () => {
  const result = useQuery(ALL_TODOS);
  return result;
};

export const FindToDos = () => {
  const result = useLazyQuery(FIND_TODO);
  return result;
};

export const EditToDo = () => {
  const result = useMutation(EDIT_TODO);
  return result;
};

export const RemoveToDo = () => {
  const result = useMutation(ELIMINAR_TODO);
  return result;
};

export const CreateToDo = () => {
  const result = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: ALL_TODOS }],
  });
  return result;
};
