import "./App.css";
import ToDos from "./components/ToDoList";
import RegistroUsuario from "./components/RegistroUsuario";
import LoginUsuario from "./components/LoginUsuario";
import RegistroTodo from "./components/Form";

function App() {
  const token = localStorage.getItem("token");

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
        <ToDos />
      </div>
    );
  }
}

export default App;
