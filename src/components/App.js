import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleDeleteTask = (task) => setTasks(tasks.filter(t=>t.id !== task.id)) 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onFilterChange={category => setSelectedCategory(category)}
      />
      <NewTaskForm onTaskFormSubmit={task => setTasks([...tasks], task)}
      />
      <TaskList 
        tasks={TASKS} 
        onDeleteTask={handleDeleteTask} 
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
