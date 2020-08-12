// SET_VIEW_TYPE
export const setViewType = (view = 'all') => ({
    type: 'SET_VIEW_TYPE',
    view
})

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_TITLE
export const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
})