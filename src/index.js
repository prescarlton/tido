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
store.dispatch(addTaskToList({ listName: 'General To-do', taskName: 'Get an actual job' }))
store.dispatch(addTaskToList({ listName: 'General To-do', taskName: 'Hang picture in room' }))

store.dispatch(newList({listName: 'Office'}))
store.dispatch(addTaskToList({ listName: 'Office', taskName: 'Set up 3D printer' }))
store.dispatch(addTaskToList({ listName: 'Office', taskName: 'Set up server' }))
store.dispatch(addTaskToList({ listName: 'Office', taskName: 'Buy nicer monitor' }))

store.dispatch(newList({ listName: 'Bike stuff' }))
store.dispatch(addTaskToList({ listName: 'Bike stuff', taskName: 'Ride 300 mi' }))
store.dispatch(addTaskToList({ listName: 'Bike stuff', taskName: 'Replace chain on cannondale' }))
store.dispatch(addTaskToList({ listName: 'Bike stuff', taskName: 'Wash commie bike' }))
store.dispatch(addTaskToList({ listName: 'Bike stuff', taskName: 'Buy wash kit on amazon' }))



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
