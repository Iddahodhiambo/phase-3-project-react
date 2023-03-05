import React, { useState } from "react";
import Taskdetails from "./taskdetails";
import TaskForm from "./TaskForm";

function Task({ tasks }) {

  const [showTaskForm, setShowTaskForm] = useState(false);

  function handleClick() {
    setShowTaskForm(!showTaskForm);
  }

  return (
    <>
      <button className="button" onClick={handleClick} >Create New Task</button>
      {showTaskForm ? <TaskForm /> : null}
      <div>
        {tasks.map((task) => {
          return (
            <Taskdetails
              title={task.title}
              description={task.description}
              due_date={task.due_date}
              completion_status={task.completion_status}
              key={task.id}
            />
          );
        })}
      </div>
    </>
  );
}
export default Task;
