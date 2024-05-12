import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Misc",
  });

  const items = categories.filter((category) => category !== "All");
  function handleInput(e) {
    const key = e.target.name;
    setFormData({ ...formData, [key]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ text: "" });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInput}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleInput}
        >
          {items.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
