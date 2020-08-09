import { createStore, combineReducers } from 'redux';
import listItemsReducer from '../reducers/listItems';
import filterReducer from '../reducers/filters';

export default () => {
    // create the store
    const store = createStore(
        combineReducers({
            items: listItemsReducer,
            filters: filterReducer
        })
    )
    return store;
}