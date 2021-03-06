import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addItem } from './actions/listItems';
import App from './App';
import { addTaskToList, newList, deleteList } from './actions/lists';

const store = configureStore();


store.dispatch(newList({ listName: 'General To-do' }))

store.dispatch(addTaskToList({ listName: 'General To-do', taskName: 'Make tido better' }))
store.dispatch(addTaskToList({ listName: 'General To-do', taskName: 'go to dads house' }))
store.dispatch(addTaskToList({ listName: 'General To-do', taskName: 'put clothes away' }))

store.dispatch(newList({ listName: 'Bike stuff' }))
store.dispatch(addTaskToList({ listName: 'Bike stuff', taskName: 'fix cannondale' }))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
