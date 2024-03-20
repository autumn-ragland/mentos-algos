import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createNewTask } from '../slices/taskSlice'

export const  AddTask = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        if(taskDescription === ''){
            return;
        }
        dispatch(createNewTask(taskDescription));
        setTaskDescription('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='taskForm'>
                <input value={taskDescription} onChange={e => setTaskDescription(e.target.value)}/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path fill="#84A59D" d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </button>
            </form>
        </div>
    )
}