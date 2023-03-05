import React from 'react';
import './App.css';
import { useState, useEffect } from'react';
import Task from './components/tasks';
import Log_in from './components/log_in';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';



  function App() {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(function() {
     fetch("http://localhost:9292/tasks").then((response)=> response.json()).then((data) => {
       setTasks(data)
        
     })
      
  },[])
  
 return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Log_in setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/tasks" element={<Task tasks = {tasks} setTasks={setTasks}/>} />
        <Route path="*" element={<Log_in to="/login" replace />} />
    </Routes>
    </div>
  )
}

export default App;
