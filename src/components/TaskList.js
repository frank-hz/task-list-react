import {TaskItem} from './TaskItem';

export const TaskList = ({tasks, update_task, remove_task}) => { 
    let data_render;
    if (tasks.length > 0) {
        data_render = tasks.map((task,index) => (
            <TaskItem 
                task={task} 
                update_task={update_task} 
                remove_task={remove_task} 
            />
        ));
    }else {
        data_render = <li className="task-muted">Sin Datos</li>;
    }
    return (
        <ul className='card-list'>    
            {data_render}
        </ul>
    );
}