export function handleDeleteTask(tasks, index, setTask) {
  const updatedTasks = tasks.filter((tasks) => tasks.id !== index);
  setTask(updatedTasks);
}
