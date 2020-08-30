import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/organisms/Sidebar';


import ListPage from '../components/pages/ListPage';
import ListViewPage from '../components/pages/ListViewPage';
import SchedulePage from '../components/pages/SchedulePage';
import StatsPage from '../components/pages/StatsPage';
import UserDashboard from '../components/pages/UserDashboard';
import { connect } from 'react-redux';
import LandingPage from '../components/pages/LandingPage';
import LoginPage from '../components/pages/LoginPage';
import SignupPage from '../components/pages/SignupPage';

const AppRouter = (props) => (
    <BrowserRouter>

        {props.auth.userLoggedIn ? (
            <>
                <Sidebar />
                <Switch>
                    <Route path='/' component={UserDashboard} exact />
                    <Route path='/list/:listID' component={ListPage} />
                    <Route path='/lists' component={ListViewPage} />
                    <Route path='/schedule' component={SchedulePage} />
                    <Route path='/stats' component={StatsPage} />
                </Switch>
            </>
        ) : (
                <Switch>
                    <Route path='/' component={LandingPage} exact />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/signup' component={SignupPage} />
                    <Route component={LandingPage} />
                </Switch>
            )}


    </BrowserRouter>
)

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AppRouter);