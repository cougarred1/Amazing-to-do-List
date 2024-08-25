import "./styles.css";
import { useState } from "react";

function ToDoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  //we need to bring create a hook for the task index
  const [taskIndex, setTaskIndex] = useState<number | null> (null);
  //also another hook for editing the task value "the to-do"
  const [taskValue, setEditTaskValue] = useState("");

  //handleInputChange is a function that invokes the setNewTask function, that changed the newTask 
  //which starts as a empty string, to whatever is typed in
  const handleInputChange = (event: any) => {
    // console.log(event.target.value);a
    setNewTask(event.target.value);
  };

  const addTask = () => {

    //after trimming white space from the newTask, which starts as a string
    //if the result doesn't equal a empty string, then we can add it to the To Do List
    if (newTask.trim() !== ""){
      //add all elements from the t into the new Array, then adds the newTask at the end
      setTasks(task => [...task, newTask])
      setNewTask("");
    }
  };


  const deleteTask = (index: any) => {

    //create a variable called updatedTasks that will server as a new array outputting
    //all tasks except the deleted one
    
    //use the tasks array since that's what houses all tasks
    // a underscore is used if a parameter is not expected to be used
    //this would be 'element', but we didn't expect to use it so replace it with a _
    //it's conventional to sue in modern times
    const updatedTasks = tasks.filter((_, i) => i !== index);

    //setTasks to the updatedArray tasks
    setTasks(updatedTasks);
  };


  //we need this editTask function to be able to edit a task, that has already been made
  //when the edit button is clicked, it will use .map to edit this specific task
  //setting the new task to whatever is input
  const editTask = (index: number) => {
    //make the setTaskIndex state function, invoked with the current index
    setTaskIndex(index)
    //make the setEditTaskValue function equal to the value of this value,
    // using index bracket notation on the tasks
    setEditTaskValue(tasks[index]);
  };

  const cancelEdit = () => {
    //set the setTaskIndex to represent no value using null
    setTaskIndex(null);
    //set the value of the task a empty string
    setEditTaskValue("");
  };

  const saveEdit = (index: number)  => {

    //create a variable that will represent if the index equals the current task, set the new value
    //update the task in the list
    const updatedTasks = tasks.map((task, i) =>
     i === index ? taskValue : task
    );

    //use the setTasks function to make the task this new updated task
    //update the tasks [] array to the updated Tasks
    setTasks(updatedTasks);
    setTaskIndex(null);
    setEditTaskValue("");
  };

  const handleEditChange = (event: any) => {
    //change the value to whatever is typed in
    setEditTaskValue(event.target.value);
  };

  return (
      <div className="header">
        <h1 className="test">🔥To-Do-List🔥</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Task Here..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button 
          className="add-button"
          onClick={addTask}
          >Add Task</button>
        </div>

        <ol>
          {tasks.map((task, index) => 
            <li key={index}>
              {taskIndex === index ? (
                <>
                  <input
                    type="text"
                    value={taskValue}
                    onChange={handleEditChange}
                  />
                  <button
                    className="save-button"
                    onClick={() => saveEdit(index)}
                  >
                    ✅
                  </button>
                  <button
                    className="cancel-button"
                    onClick={cancelEdit}
                  >
                    ❌
                  </button>
                </>
              ) : (
              <>              
                <span className="text">{task}</span>
                <button
                className="delete-button"
                onClick={() => deleteTask(index)}
                >
                  ❌
                </button>
                <button
                className="edit-button"
                onClick={() => editTask(index)}
                >
                  ✏️
                </button>
              </>
              )}
            </li>
          )}
        </ol>
      </div>
  );
}

export default ToDoList;
