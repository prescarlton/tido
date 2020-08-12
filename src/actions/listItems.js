import { v4 as uuidv4 } from 'uuid';

// ADD_ITEM
export const addItem = ({ taskName = '', flag = '', dueAt = '' }) => ({
    type: 'ADD_ITEM',
    listItem: {
        id: uuidv4(),
        taskName,
        flag,
        dueAt,
        completed:false
    }
})

// COMPLETE_ITEM
export const completeItem = ({ taskName = '' }) => ({
    type: 'COMPLETE_ITEM',
    taskName
})

// DELETE_ITEM
export const deleteItem = ({ taskName = '' }) => ({
    type: 'DELETE_ITEM',
    taskName
})

// EDIT_ITEM
export const editItem = (id, updates) => ({
    type: 'EDIT_ITEM',
    id,
    updates
})