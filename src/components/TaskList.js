import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask, selectedCategory }) {
  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter(task => task.category === selectedCategory) 
  return (
    <div className="tasks">
      {filteredTasks.map(task => <Task key={task.id} task={task} onDeleteTask={onDeleteTask}/>)}
    </div>
  );
}

export default TaskList;
