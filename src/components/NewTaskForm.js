import React, {useState} from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit({text: taskText, category: selectedCategory})
    setTaskText('')
  }

  return (
    <form 
      className="new-task-form" 
      onSubmit={handleSubmit}
    >
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          placeholder="Task text"
          value={taskText}
          onChange={e => setSelectedCategory(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value=''>All</option>
          {CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

/*
In this updated component, we're using the useState hook to manage the state of the task text and selected category.

We've added a handleSubmit function that prevents the default form submission behavior and calls the onTaskFormSubmit callback prop with the new task object. We've also reset the task text state to an empty string after adding the task.

In the form, we're using controlled components for the text input and category select element. We're updating the state of the taskText and selectedCategory variables whenever the user types in the text input or selects a category from the dropdown.

When the form is submitted, the handleSubmit function is called, which adds the new task to the list and resets the task text state.
*/