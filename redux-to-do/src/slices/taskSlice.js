import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
    },
    reducers: {
        createNewTask: (state, action) => {
            const newTask = action.payload;
            state.tasks = [...state.tasks, {description: newTask, complete: false, id: ('id' + (new Date()).getTime()), displayUpdate:false }]
        },
        updateExistingTaskDescription: (state, action) => {
            const selectedTask = action.payload.id;
            const selectedTaskDescription = action.payload.updatedDescription;
            const selectedTaskIndex = state.tasks.findIndex(el => el.id === selectedTask);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1, {description: selectedTaskDescription, complete: state.tasks[selectedTaskIndex].complete, id: state.tasks[selectedTaskIndex].id, displayUpdate:false })
            state.tasks = updatedTasks;
        },
        markExistingTaskAsComplete: (state, action) => {
            const selectedTask = action.payload;
            const selectedTaskIndex = state.tasks.findIndex(el => el.id === selectedTask);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1, {description: state.tasks[selectedTaskIndex].description, complete: true, id: state.tasks[selectedTaskIndex].id, displayUpdate:false })
            state.tasks = updatedTasks;
        },
        deleteExistingTask: (state, action) => {
            const selectedTask = action.payload;
            const selectedTaskIndex = state.tasks.findIndex(el => el.id === selectedTask);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1)
            state.tasks = updatedTasks;
        },
        displayTaskUpdateForm: (state, action) => {
            const selectedTask = action.payload;
            const selectedTaskIndex = state.tasks.findIndex(el => el.id === selectedTask);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1, {description: state.tasks[selectedTaskIndex].description, complete: state.tasks[selectedTaskIndex].complete, id: state.tasks[selectedTaskIndex].id, displayUpdate:true })
            state.tasks = updatedTasks;
        },
        hideTaskUpdateForm: (state, action) => {
            const selectedTask = action.payload;
            const selectedTaskIndex = state.tasks.findIndex(el => el.id === selectedTask);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1, {description: state.tasks[selectedTaskIndex].description, complete: state.tasks[selectedTaskIndex].complete, id: state.tasks[selectedTaskIndex].id, displayUpdate:false })
            state.tasks = updatedTasks;
        }
    }
});

export const {createNewTask, updateExistingTaskDescription, markExistingTaskAsComplete, deleteExistingTask, displayTaskUpdateForm, hideTaskUpdateForm} = taskSlice.actions;
export default taskSlice.reducer;