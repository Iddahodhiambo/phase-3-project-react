import React from 'react';
import Taskdetails from './taskdetails';
 
function Task({tasks}) {

return(
    <div>
    
    {tasks.map(task=> {
        return <Taskdetails
        title= {task.title}
        description = {task.description}
        due_date = {task.due_date}
        completiom_status = {task.completiom_status}
        key = {task.id}/>
        
    })

    }
    </div>
)
}
export default Task;