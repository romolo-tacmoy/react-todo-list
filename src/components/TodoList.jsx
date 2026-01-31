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
      <div className="flex flex-col gap-2">
        <h6 className="font-bold">
          TODO LIST <span className="text-red-500">*</span>
        </h6>

        <div>
          {tasks.map((task) => {
            return (
              <div className="flex gap-2" key={task.id}>
                <input type="text" value={task.todo} readOnly />
                <button
                  className="bg-red-500"
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
          <div className="flex flex-col gap-2 lg:flex-row md:flex-row">
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
                className="bg-red-500"
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                x
              </button>
            ) : (
              <button className="bg-blue-500" onClick={handleAddTask}>
                +
              </button>
            )}
          </div>
        )}

        <button
          className="bg-blue-500 text-white py-1 px-4 rounded text-sm lg:text-base md:text-base"
          onClick={handleAddTask}
        >
          + Add TODO LIST
        </button>
      </div>
    </>
  );
}
