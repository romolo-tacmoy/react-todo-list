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
      <div className="flex flex-col gap-2">
        <h6 className="font-bold">
          TODO LIST with Description <span className="text-red-500">*</span>
        </h6>

        <div>
          {taskWithDescriptions.map((taskWithDescription) => {
            return (
              <div className="flex gap-2" key={taskWithDescription.id}>
                <input type="text" value={taskWithDescription.todo} readOnly />
                <input
                  type="text"
                  value={taskWithDescription.description}
                  readOnly
                />
                <button
                  class="bg-red-500"
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

        <div className="flex flex-col gap-2 lg:flex-row md:flex-row">
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
                  className="bg-red-500"
                  onClick={() => {
                    setIsVisible(false);
                  }}
                >
                  x
                </button>
              ) : (
                <button
                  className="bg-blue-500"
                  onClick={handleAddTaskWithDescription}
                >
                  +
                </button>
              )}
            </>
          )}
        </div>

        <button
          className="bg-blue-500 text-white py-1 px-4 rounded text-sm lg:text-base md:text-base"
          onClick={handleAddTaskWithDescription}
        >
          + Add TODO LIST with Description
        </button>
      </div>
    </>
  );
}
