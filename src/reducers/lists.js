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
                return list.listName != action.listName
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
        case 'ADD_ITEM_TO_LIST':
            return state.map((list) => {
                if (list.listName === action.listName) {
                    return {
                        ...list,
                        tasks: [...list.tasks, action.task]
                    }
                }else{
                    return list
                }

            })
        default:
            return state
    }
}

export default listsReducer;