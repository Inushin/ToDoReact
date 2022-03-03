import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input"></input>
      <button class="todo-button" type="submit">
        {" "}
        AGREGAR{" "}
      </button>
    </form>
  );
};

export default Form;
