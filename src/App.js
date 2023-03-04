import React from 'react';
import './App.css';
import { useState, useEffect } from'react';
import Task from './components/tasks';
import Log_in from './components/log_in';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';



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
      <Routes>
        <Route path="/login" element={<Log_in/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App;
