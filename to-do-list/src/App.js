import './App.css';
import {useState} from "react";

function App() {
  const [ToDoList,setToDoList]=useState([]);
  const [newTask,setNewTask]= useState("");
  const TaskAdd=(event)=>{
    setNewTask(event.target.value);
  }

  return (
    <div className="App">
    <div className="AddTask">
    <input onChange={TaskAdd}></input>
    <button>Add Task</button>
    </div>
    <div className="list"></div>
    {newTask}
    </div>
  );
}

export default App;
