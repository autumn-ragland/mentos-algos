import { createSlice } from "@reduxjs/toolkit";

function filterByTaskId(state,taskId){
    return state.tasks.findIndex(el => el.id === taskId);
}

function getTaskIndex(state,taskIndex){
    return state.tasks[taskIndex];
}

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
            const selectedTaskDescription = action.payload.updatedDescription;
            const selectedTaskIndex = filterByTaskId(state, action.payload.id);
            const selectedTask = getTaskIndex(state,selectedTaskIndex);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1, {description: selectedTaskDescription, complete: selectedTask.complete, id: selectedTask.id, displayUpdate: selectedTask.displayUpdate })
            state.tasks = updatedTasks;
        },
        updateExistingTaskCompletion: (state, action) => {
            const selectedTaskIndex = filterByTaskId(state, action.payload);
            const selectedTask = getTaskIndex(state,selectedTaskIndex);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1, {description: selectedTask.description, complete: !selectedTask.complete, id: selectedTask.id, displayUpdate: selectedTask.displayUpdate })
            state.tasks = updatedTasks;
        },
        deleteExistingTask: (state, action) => {
            const selectedTaskIndex = filterByTaskId(state, action.payload);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1)
            state.tasks = updatedTasks;
        },
        showHideTaskUpdateForm: (state, action) => {
            const selectedTaskIndex = filterByTaskId(state, action.payload);
            const selectedTask = getTaskIndex(state,selectedTaskIndex);
            const updatedTasks = state.tasks.toSpliced(selectedTaskIndex, 1, {description: selectedTask.description, complete: selectedTask.complete, id: selectedTask.id, displayUpdate: !selectedTask.displayUpdate });
            state.tasks = updatedTasks;
        },
    }
});

export const {createNewTask, updateExistingTaskDescription, updateExistingTaskCompletion, deleteExistingTask, showHideTaskUpdateForm} = taskSlice.actions;
export default taskSlice.reducer;