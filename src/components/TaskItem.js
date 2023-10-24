export const TaskItem = ({task, update_task, remove_task}) => {

    return (
        <li className="task-item" key={task.id}>
            <input id={task.id} type="checkbox" name="task-item" checked={task.done} onChange={() => update_task(task)} />
            <div className="task-content">
                <label for={task.id} className="task-icon">
                </label> 
                <div className="task-label">{task.name}</div>
            </div>
            <div className="task-options">
                <div className={"task-state task-state-"+ (task.done ? 'done':'in_wait' )}>
                    {task.done ? 'Done' : 'In Wait'}
                </div>
                <button className="task-button task-button-danger" onClick={()=> remove_task(task)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        </li>
    );
}