
// Filters Reducer
const filterReducerDefaultState = {
    view: '',
    sortBy: ''
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_VIEW_TYPE':
            return {
                ...state,
                view: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_TITLE':
            return {
                ...state,
                sortBy: 'title'
            }
        default:
            return state
    }
}

export default filterReducer;