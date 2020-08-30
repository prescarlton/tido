import { createStore, combineReducers, applyMiddleware } from 'redux';
import listItemsReducer from '../reducers/listItems';
import filterReducer from '../reducers/filters';
import listsReducer from '../reducers/lists';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

export default () => {
    // create the store
    const store = createStore(
        combineReducers({
            items: listItemsReducer,
            filters: filterReducer,
            lists: listsReducer,
            auth: authReducer
        }),applyMiddleware(thunk)
    )
    return store;
}