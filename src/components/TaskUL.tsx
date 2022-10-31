import { TaskInterface } from "../App";
import TaskLI from "./TaskLI";
import './styles/TaskUL.css';

const TaskUL = (props: {tasks: TaskInterface[], taskFunctions: {CompleteTask:(taskDescription: string) => void,CancelTask:(taskDescription: string) => void}}) => {
    return (
        <ul>
            {
                props.tasks.map((task: TaskInterface,index: number) => 
                    {
                        return <TaskLI  index={index.toString()} task={task} taskFunctions={props.taskFunctions}/>
                    }
                )
            }
        </ul>
    );
}

export default TaskUL;