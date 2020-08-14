import { v4 as uuidv4 } from 'uuid';

// CREATE_LIST
export const newList = ({listName}) => ({
    type: 'CREATE_LIST',
    list: {
        id: uuidv4(),
        listName,
        tasks: []
    }
})

// EDIT_LIST
export const editList = (listName, updates) => ({
    type: 'EDIT_LIST',
    listName,
    updates
})

// DELETE_LIST
export const deleteList = ({listName}) => ({
    type: 'DELETE_LIST',
    listName
})

// ADD_TASK
export const addTaskToList = ({listName, taskName = '', dueAt = '', flag = ''}) => ({
    type: 'ADD_TASK_TO_LIST',
    listName,
    task: {
        id: uuidv4(),
        name: taskName,
        due: dueAt,
        flag
    }
})

// COMPLETE_TASK
export const completeTask = ({listID, taskID}) => ({
    type: 'COMPLETE_TASK',
    listID,
    taskID
})

// DELETE_TASK
export const deleteTask = ({listID, taskID}) => ({
    type: 'DELETE_TASK',
    listID,
    taskID
})