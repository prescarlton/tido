import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
import UserExperienceRouter from './UserExperienceRouter';
import { Auth } from 'aws-amplify';
import { setUserLoggedIn } from '../actions/auth';

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

const AppRouter = (props) => {

    const checkUserLoggedIn = async () => {
        try {
            const authedUser = await Auth.currentAuthenticatedUser();
            console.log('user is logged in!')
            props.logUserIn()
        } catch (err) {
            console.log(err);
        }
    }
    // useEffect(() => {
    //     checkUserLoggedIn();
    // }, [])
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={LandingPage} exact />
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignupPage} />
                {/* <PrivateRoute authed={props.auth.userLoggedIn} path='/app' component={UserExperienceRouter} /> */}
                <Route path='/app' component={UserExperienceRouter} />
                <Route>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: () => {
            dispatch(setUserLoggedIn(true))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
