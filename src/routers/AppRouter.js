import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/organisms/Sidebar';


import HomePage from '../components/pages/HomePage';
import ListPage from '../components/pages/ListPage';

const AppRouter = () => (
    <BrowserRouter>

            <Sidebar />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/list/:listID' component={ListPage}/>
            </Switch>

    </BrowserRouter>
)

export default AppRouter;