import "./App.css";
import Form from "./components/Form";
import { gql, useQuery } from "@apollo/client";
import ToDos from "./components/ToDoList";
import RegistroUsuario from "./components/RegistroUsuario";

const ALL_TODOS = gql`
  query {
    todos {
      id_todo
      actividad
      finalizada
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_TODOS);

  

  if (error) return <span style="color:red">{error}</span>;
  return (
    <div className="App">
      <header>
        <h1>ToDo en REACT</h1>
        {loading && <p>Loading...</p>}
      </header>
      <Form />
      {data && data.todos.map((todos) => todos.id_todo).join(", ")}
      <ToDos todos={data?.todos}/>
      <RegistroUsuario/>
    </div>
  );
}

export default App;
