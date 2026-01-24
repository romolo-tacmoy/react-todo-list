import { useState } from "react";
import { handleDeleteTask } from "../utils/handleDeleteTask";
import { handleOnChange } from "../utils/handleOnChange";

export function TodoList() {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  function handleAddTask() {
    if (isVisible) {
      if (!textInput.trim()) {
        alert("Empty input - task not added");
      } else {
        setTasks([
          ...tasks,
          {
            id: crypto.randomUUID(),
            todo: textInput,
          },
        ]);
      }
    }

    setTextInput("");
    setIsVisible(true);
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">
          <h6>
            TODO LIST <span>*</span>
          </h6>
        </div>

        <div className="todo-task">
          {tasks.map((task) => {
            return (
              <div key={task.id}>
                <input type="text" value={task.todo} readOnly />
                <button
                  onClick={() => {
                    handleDeleteTask(tasks, task.id, setTasks);
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>

        {isVisible && (
          <div className="todo-input">
            <input
              type="text"
              value={textInput}
              onChange={(e) => {
                handleOnChange(e, setTextInput);
              }}
              placeholder="Todo"
            />
            {tasks.length > 0 ? (
              <button
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                x
              </button>
            ) : (
              <button onClick={handleAddTask}>+</button>
            )}
          </div>
        )}

        <div className="todo-add">
          <button onClick={handleAddTask}>+ Add TODO LIST</button>
        </div>
      </div>
    </>
  );
}
