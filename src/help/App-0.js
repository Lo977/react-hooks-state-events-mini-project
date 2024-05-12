import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const visibleTasks =
    category === "All"
      ? tasks
      : tasks.filter((task) => task.category === category);

  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  function handleSetTasks(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm onTaskFormSubmit={handleSetTasks} categories={CATEGORIES} />
      <TaskList onHandleDelete={handleDelete} tasks={visibleTasks} />
    </div>
  );
}

export default App;
