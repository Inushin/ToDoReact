import "./App.css";
import Form from "./components/Form";
import ToDos from "./components/ToDoList";
import RegistroUsuario from "./components/RegistroUsuario";
import { UseToDos } from "./toDos/custom-hooks";

function App() {
  const { loading, error, data } = UseToDos();

  if (error) return <span style="color:red">{error}</span>;
  return (
    <div className="App">
      <header>
        <h1>ToDo en REACT</h1>
        {loading && <p>Loading...</p>}
      </header>
      <Form />
      {data && data.todos.map((todos) => todos.id_todo).join(", ")}
      <ToDos todos={data?.todos} />
      <RegistroUsuario />
    </div>
  );
}

export default App;
