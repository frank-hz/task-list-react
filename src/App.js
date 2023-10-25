import { useState,useEffect } from 'react';
import './assets/fonts/Inter/inter.css';
// import {Header, Form, List} from './components';
import { Header } from './components/Header';
import { TaskNew } from './components/TaskNew';
import { TaskList } from './components/TaskList';


function App(){
    const [Tasks, setTask] = useState([]);
    const save_task = (TaskName) => {
        if (!TaskName.length) {
            console.log('Error: task without content');
            return;
        }
        setTask([...Tasks, {
            id: Math.random().toString(32).substring(7),
            name: TaskName,
            done: false
        }]);
    }
    const update_task = (task) => {
        setTask(
            Tasks.map(
                t => (t.id == task.id) ? {...t, done: !task.done} : t
            )
        );
    }
    const remove_task = (task) => {
        if (!task) {
            console.log('task not found');
            return;
        }
        if (window.confirm('¿Delete Task?')) {
            setTask(
                Tasks.filter(t => (t.id !== task.id))
            );
        }
    }

    useEffect(() => {
        let data = localStorage.getItem('tasks');
        if (data) {
            setTask(JSON.parse(data));
        } 
    }, [ ]);

    useEffect(() => {               
        localStorage.setItem('tasks', JSON.stringify(Tasks));
    }, [Tasks]);
  
    return (
        <div className="app">
            <div className="card">
                <Header/>
                <TaskNew save_task={save_task} />
                <TaskList tasks={Tasks} update_task={update_task} remove_task={remove_task} />
            </div>
            <div className='toggleTheme'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
            </div>   
        </div>
    );
}

export default App;