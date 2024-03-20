import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { hideTaskUpdateForm, updateExistingTaskDescription } from '../slices/taskSlice';

export const  UpdateTask = (props) => {
    const filterToDo = useSelector((state) => state.task.tasks.find((el) => el.id === props.id));
    const [taskDescription, setTaskDescription] = useState(filterToDo.description);
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        if(taskDescription === ''){
            return;
        }
        dispatch(updateExistingTaskDescription({id: props.id, updatedDescription: taskDescription}));
        dispatch(hideTaskUpdateForm(props.id));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='taskForm updateTaskForm'>
                <input value={taskDescription} onChange={e => setTaskDescription(e.target.value)}/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path fill="#F28482" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </button>
            </form>
        </div>
    )
}