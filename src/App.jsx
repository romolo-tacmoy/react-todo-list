import { TodoList } from "./components/TodoList";
import { TodoListWithDescription } from "./components/TodoListWithDescription";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen p-8">
        <div className="flex flex-col gap-8 bg-white max-w-xl mx-auto my-8 p-8 rounded">
          <h1 className="text-3xl font-bold">Add Form</h1>
          <TodoList />
          <TodoListWithDescription />
        </div>
      </div>
    </>
  );
}

export default App;
