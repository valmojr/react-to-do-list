import { useState } from 'react';
import './App.css';
import TaskUL from './components/TaskUL';

export interface TaskInterface {
  taskDescription: string,
  status: 'pendent' | 'complete' | 'cancelled'
}

const App = () => {
  const [taskList,setTaskList] = useState<TaskInterface[]>([]);
  const [newTask, setNewTask] = useState<string>();

  const removeFromArray = async (taskDescription: string) => {
    let newTaskList: TaskInterface[] = [];
    let delay = (time: number | undefined) => {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    await delay(1000);
    
    taskList.forEach(task => {
      if (task.taskDescription !== taskDescription) {
        newTaskList.push(task);
        }
      setTaskList(newTaskList);
      }
    );
  }

  const setTaskComplete = (taskDescription: string) => {
    let newTaskList: TaskInterface[] = [];
    taskList.forEach(task => {
      if (task.taskDescription === taskDescription) {
        let newTask: TaskInterface = {taskDescription: taskDescription, status:'complete'}
        newTaskList.push(newTask);
      } else {
        newTaskList.push(task);
      };
      setTaskList(newTaskList);
    })
  }

  const setTaskCancelled = (taskDescription: string) => {
    let newTaskList: TaskInterface[] = [];
    taskList.forEach(task => {
      if (task.taskDescription === taskDescription) {
        let newTask: TaskInterface = {taskDescription: taskDescription, status:'cancelled'}
        newTaskList.push(newTask);
      } else {
        newTaskList.push(task);
      };
      setTaskList(newTaskList);
    })
  }

  const taskFunctions = {
    CompleteTask: (taskDescription: string) => {
      setTaskComplete(taskDescription);
      removeFromArray(taskDescription);
    },
    CancelTask: (taskDescription: string) => {
      setTaskCancelled(taskDescription);
      removeFromArray(taskDescription);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='toDoList'>
          <h1>TO DO LIST</h1>
          <TaskUL tasks={taskList} taskFunctions={taskFunctions}/>
          <form
            onSubmit={event => {
              event.preventDefault();
                if (!!newTask) {
                  setTaskList([...taskList, {taskDescription:newTask, status:'pendent'}]);
                  setNewTask("");
                }
                return;
            }}>
            <input
              type = 'text'
              placeholder = "Add New Task"
              value = {newTask}
              onChange = {
                event => setNewTask(event.target.value)
              }></input>
            <button type='submit' id='submitButton'>ADD</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;