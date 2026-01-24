import { useState } from "react";
import { handleDeleteTask } from "../utils/handleDeleteTask";
import { handleOnChange } from "../utils/handleOnChange";

export function TodoListWithDescription() {
  const [taskWithDescriptions, setTaskWithDescriptions] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  function handleAddTaskWithDescription() {
    if (isVisible) {
      if (!taskInput.trim() || !descriptionInput.trim()) {
        alert("Empty input - task not added");
      } else {
        setTaskWithDescriptions([
          ...taskWithDescriptions,
          {
            id: crypto.randomUUID(),
            todo: taskInput,
            description: descriptionInput,
          },
        ]);
      }
    }

    setTaskInput("");
    setDescriptionInput("");
    setIsVisible(true);
  }

  return (
    <>
      <div className="todo-container">
        <h6>
          TODO LIST with Description <span>*</span>
        </h6>
      </div>
      <div className="todo-task">
        {taskWithDescriptions.map((taskWithDescription) => {
          return (
            <div key={taskWithDescription.id}>
              <input type="text" value={taskWithDescription.todo} readOnly />
              <input
                type="text"
                value={taskWithDescription.description}
                readOnly
              />
              <button
                onClick={() => {
                  handleDeleteTask(
                    taskWithDescriptions,
                    taskWithDescription.id,
                    setTaskWithDescriptions,
                  );
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
      <div className="todo-input">
        {isVisible && (
          <>
            <input
              type="text"
              value={taskInput}
              placeholder="Task"
              onChange={(e) => {
                handleOnChange(e, setTaskInput);
              }}
            />
            <input
              type="text"
              value={descriptionInput}
              placeholder="Description"
              onChange={(e) => {
                handleOnChange(e, setDescriptionInput);
              }}
            />
            {taskWithDescriptions.length > 0 ? (
              <button
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                x
              </button>
            ) : (
              <button onClick={handleAddTaskWithDescription}>+</button>
            )}
          </>
        )}
      </div>
      <div className="todo-add">
        <button onClick={handleAddTaskWithDescription}>
          + Add TODO LIST with Description
        </button>
      </div>
    </>
  );
}
