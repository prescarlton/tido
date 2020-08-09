import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/organisms/Sidebar';
import TodoList from './TodoList';
import WorkTodo from './WorkTodo';
import HomePage from '../components/pages/HomePage';

const AppRouter = () => (
    <BrowserRouter>

            <Sidebar />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/todo' component={TodoList} />
                <Route path='/reminders' component={WorkTodo} />
            </Switch>

    </BrowserRouter>
)

export default AppRouter;