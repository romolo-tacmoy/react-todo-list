export function TodoListWithDescription() {
  return (
    <>
      <div className="todo-container">
        <h6>
          TODO LIST with Description <span>*</span>
        </h6>
      </div>
      <div className="todo-content">
        <form>
          <input type="text" />
          <button>x</button>
        </form>
      </div>
      <div className="todo-add">
        <button>+ Add TODO LIST with Description</button>
      </div>
    </>
  );
}
