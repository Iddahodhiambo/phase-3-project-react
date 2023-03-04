import React from 'react';
import './App.css';
import { useState, useEffect } from'react';
import Task from './components/tasks';
import Log_in from './components/log_in';



  function App() {
  //   const [tasks, setTasks] = useState([])
  //   useEffect(function() {
  //   fetch("http://localhost:9292/tasks").then((response)=> response.json()).then((data) => {
  //     setTasks(data)
  //     console.log(data)
        
  //     })
      
  // },[])
  


    
  return (
    <div className="App">
      <Log_in/>
    </div>
  )
}

export default App;
