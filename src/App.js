import "./App.css";
import ToDos from "./components/ToDoList";
import RegistroUsuario from "./components/RegistroUsuario";
import LoginUsuario from "./components/LoginUsuario";
import { FindToDosByUser, UseToDos } from "./toDos/custom-hooks";
import { useState } from "react";
import RegistroTodo from "./components/Form";

function App() {
  const [actividad, setActividad] = useState("");
  const [findToDoByUser] = FindToDosByUser();

  const idUsuarioString = localStorage.getItem("idUsuario");
  const token = localStorage.getItem("token");
  const idUsuario = parseInt(idUsuarioString);

  if (!token) {
    return (
      <div className="App">
        <header>
          <h1>¿Tienes cuenta?</h1>
        </header>
        <LoginUsuario />
        <RegistroUsuario />
      </div>
    );
  } else {
    return (
      <div className="App">
        <header>
          <h1>Bienvenido a la ToDo en REACT</h1>
        </header>
        <RegistroTodo />
        {actividad && actividad.todos.map((todos) => todos.id_todo).join(", ")}
        <ToDos />
      </div>
    );
    //<ToDos todos={actividad.data?.todos} />
    
  }
}

export default App;
