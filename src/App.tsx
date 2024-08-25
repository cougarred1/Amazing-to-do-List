//To control the styling, I would import the styling file and handle everything there
import './styles.css';
// import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  //all my functions and hooks will go here
  //also methods
  // const [newTask, setNewTask] = useState<Task>("");
  // const [tasks, setTasks] = useState([]);
  //this will server as the frontend function that we will use to create a task
  //it will be a axios post method
  // const createTask = () => {
    
  // }



  //html and everything goes here
  return (<ToDoList />)

}

export default App;
