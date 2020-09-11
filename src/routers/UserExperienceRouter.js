import React from 'react';
import Sidebar from '../components/organisms/Sidebar';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import UserDashboard from '../components/pages/UserDashboard';
import ListPage from '../components/pages/ListPage';
import ListViewPage from '../components/pages/ListViewPage';
import SchedulePage from '../components/pages/SchedulePage';
import StatsPage from '../components/pages/StatsPage';
import { connect } from 'react-redux';
import UserPageTabs from '../components/organisms/UserPageTabs';
import UserPageTopBar from '../components/molecules/UserPageTopBar';
import UserPagesidebar from '../components/molecules/UserPageSidebar';

const UserExperienceRouter = (props) => {
    let { path, url } = useRouteMatch();
    return (
        <>
            {props.auth.userLoggedIn ? (
                <>
                    <div className='contentWrapper'>
                        <div className='contentInner'>
                        <UserPageTopBar />
                            <UserPageTabs />
                            <Switch>
                                <Route exact path={path} component={UserDashboard} />
                                <Route path={`${path}/list/:listID`} component={ListPage} />
                                <Route path={`${path}/lists`} component={ListViewPage} />
                                <Route path={`${path}/schedule`} component={SchedulePage} />
                                <Route path={`${path}/stats`} component={StatsPage} />
                            </Switch>
                        </div>
                    <UserPagesidebar />
                    </div>
                </>
            ) : (
                    <Redirect to='/' />
                )
            }

        </>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(UserExperienceRouter);