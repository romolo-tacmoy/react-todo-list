import { TodoList } from "./components/TodoList";
import { TodoListWithDescription } from "./components/TodoListWithDescription";
import "./App.css";

function App() {
  return (
    <>
      <h1>Add Form</h1>
      <TodoList />
      <TodoListWithDescription />
    </>
  );
}

export default App;
