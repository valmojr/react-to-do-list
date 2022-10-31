import { TaskInterface } from "../App";
import './styles/TaskLI.css';

const TaskLI = (props: {task: TaskInterface,index: string, taskFunctions: {CompleteTask:(taskDescription: string) => void,CancelTask:(taskDescription: string) => void}}) => {
    if (props.task.status === 'pendent') {
        return (
            <li className="pendentTaskLI" key={props.index}>
                <h3>{props.task.taskDescription}</h3>
                <button className="cancelTaskButton" onClick={() => props.taskFunctions.CancelTask(props.task.taskDescription)}></button>
                <button className="finishTaskButton" onClick={() => props.taskFunctions.CompleteTask(props.task.taskDescription)}></button>
            </li>
        );
    } else if (props.task.status === 'complete') {
        return (
            <li className="completeTaskLI" key={props.index}>
                <h3>{props.task.taskDescription}</h3>
            </li>
        );
    } else if (props.task.status === 'cancelled') {
        return (
            <li className="cancelledTaskLI" key={props.index}>
                <h3>{props.task.taskDescription}</h3>
            </li>
        );
    } else {
        return null;
    }
}

export default TaskLI;