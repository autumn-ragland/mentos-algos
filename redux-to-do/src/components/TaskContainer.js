import React from 'react'
import {useSelector} from 'react-redux'
import { Task } from './Task'

export const TaskContainer = () => {
    const tasks = useSelector(state => state.task.tasks);
    const completeTasks = tasks.filter(el => el.complete === true).map(eachTask => <Task key={eachTask.id} id={eachTask.id}/>);
    const incompleteTasks = tasks.filter(el => el.complete === false).map(eachTask => <Task key={eachTask.id} id={eachTask.id}/>);

    return (
        <div className='taskContainer'>
            <p>{incompleteTasks.length > 0 && 'Incomplete'}</p>
            {incompleteTasks}
            <p>{completeTasks.length > 0 && 'Complete'}</p>
            {completeTasks}
        </div>
    )
}