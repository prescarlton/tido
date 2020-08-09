// List items reducer
const listItemsReducerDefaultState = [];
const listItemsReducer = (state = listItemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.listItem
            ];
        case 'DELETE_ITEM':
            return [...state].filter(listItem => listItem.id !== action.id)
        case 'EDIT_ITEM':
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
        case 'COMPLETE_ITEM':
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        completed: true
                    }
                } else {
                    return item;
                }
            })
            
        default:
            return state
    }
}

export default listItemsReducer;