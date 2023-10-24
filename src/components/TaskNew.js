import { useState } from "react";

export const TaskNew = (props) => {
    const [TaskName,setTaskName] = useState('');
    const handleSaveTask = (e) => {
        e.preventDefault();
        props.save_task(TaskName);
        setTaskName('');
    }
    return (        
        <form onSubmit={handleSaveTask} className="card-form">
            <label className="form-label">New Task</label>
            <div className="input-button-group">
                <input autoComplete="off" type="text" name="task_name" 
                onChange={e => setTaskName(e.target.value)} 
                value={TaskName}
                />
                <button>Add</button>
            </div>
        </form>
    );
}
