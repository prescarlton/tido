// Lists reducer
const listsReducerDefaultState = [];
const listsReducer = (state = listsReducerDefaultState, action) => {
    switch (action.type) {
        case 'CREATE_LIST':
            return [
                ...state,
                action.list
            ];
        case 'DELETE_LIST':
            return [...state].filter((list) => {
                return list.listName !== action.listName
            })
        case 'EDIT_LIST':
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item;
                }
            })
        case 'ADD_TASK_TO_LIST':
            return state.map((list) => {
                if (list.listName === action.listName) {
                    return {
                        ...list,
                        tasks: [...list.tasks, action.task]
                    }
                } else {
                    return list
                }

            })
        case 'COMPLETE_TASK':
            return state.map((list) => {
                if (list.listID === action.listID) {
                    // create new tasks list with the correct task completed
                    // const newTasks = 

                    return {
                        ...list,
                        tasks: list.tasks.map((task) => {
                            if (task.id === action.taskID) {
                                return {
                                    ...task,
                                    completed: !task.completed
                                }
                            } else {
                                return task
                            }
                        })
                    }
                } else {
                    return list
                }
            })
        default:
            return state
    }
}

export default listsReducer;