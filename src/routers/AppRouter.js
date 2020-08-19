import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/organisms/Sidebar';


import HomePage from '../components/pages/HomePage';
import ListPage from '../components/pages/ListPage';
import ListViewPage from '../components/pages/ListViewPage';
import SchedulePage from '../components/pages/SchedulePage';
import StatsPage from '../components/pages/StatsPage';

const AppRouter = () => (
    <BrowserRouter>

        <Sidebar />
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/list/:listID' component={ListPage} />
            <Route path='/lists' component={ListViewPage} />
            <Route path='/schedule' component={SchedulePage}/>
            <Route path='/stats' component={StatsPage}/>
        </Switch>

    </BrowserRouter>
)

export default AppRouter;