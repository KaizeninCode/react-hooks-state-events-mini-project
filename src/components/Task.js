import React from "react";

function Task({task, onDeleteTask }) {
  const handleDeleteTask = () => onDeleteTask(task)
  
  return (
    <div className={`task ${task.category}`}>
       <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button className="delete" onClick={handleDeleteTask}>X</button>
    </div>
  );
}

export default Task;
