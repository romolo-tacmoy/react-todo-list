import { useState } from "react";

export function TodoList() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleOnChange(event) {
    setTextInput(event.target.value);
  }

  function handleOnClick() {
    setTodoList([
      ...todoList,
      {
        id: crypto.randomUUID(),
        task: textInput,
      },
    ]);

    setTextInput("");
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">
          <h6>
            TODO LIST <span>*</span>
          </h6>
        </div>

        <div className="todo-list">
          {todoList.map((list) => {
            return (
              <div key={list.id}>
                <input type="text" value={list.task} readOnly />
                <button>x</button>
              </div>
            );
          })}
        </div>

        <div className="todo-input">
          <input type="text" value={textInput} onChange={handleOnChange} />
          {todoList.length > 0 ? (
            <button>x</button>
          ) : (
            <button onClick={handleOnClick}>+</button>
          )}
        </div>

        <div className="todo-add">
          <button onClick={handleOnClick}>+ Add TODO LIST</button>
        </div>
      </div>
    </>
  );
}
