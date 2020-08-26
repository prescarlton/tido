import { createStore, combineReducers, applyMiddleware } from 'redux';
import listItemsReducer from '../reducers/listItems';
import filterReducer from '../reducers/filters';
import listsReducer from '../reducers/lists';
import thunk from 'redux-thunk';

export default () => {
    // create the store
    const store = createStore(
        combineReducers({
            items: listItemsReducer,
            filters: filterReducer,
            lists: listsReducer
        }),applyMiddleware(thunk)
    )
    return store;
}