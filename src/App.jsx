import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskFrom";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />{/*se le pasa la funcion create task al componente TaskFrom para que pueda crearla desde su componente*/}
        <TaskList />
      </div>
    </main>
  );
}

export default App;
