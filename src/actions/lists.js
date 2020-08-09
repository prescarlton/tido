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

// ADD_ITEM
export const addItemToList = ({listName, taskName = '', dueAt = '', flag = ''}) => ({
    type: 'ADD_ITEM_TO_LIST',
    listName,
    task: {
        name: taskName,
        due: dueAt,
        flag
    }
})