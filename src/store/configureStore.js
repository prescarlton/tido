import { createStore, combineReducers } from 'redux';
import listItemsReducer from '../reducers/listItems';
import filterReducer from '../reducers/filters';
import listsReducer from '../reducers/lists';

export default () => {
    // create the store
    const store = createStore(
        combineReducers({
            items: listItemsReducer,
            filters: filterReducer,
            lists: listsReducer
        })
    )
    return store;
}