import React, { useEffect, useState } from 'react';
import Sidebar from '../components/organisms/Sidebar';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import UserDashboard from '../components/pages/UserDashboard';
import ListInfoPage from '../components/pages/ListInfoPage';
import ListViewPage from '../components/pages/ListViewPage';
import SchedulePage from '../components/pages/SchedulePage';
import StatsPage from '../components/pages/StatsPage';
import { connect } from 'react-redux';
import UserPageTabs from '../components/organisms/UserPageTabs';
import UserPageTopBar from '../components/molecules/UserPageTopBar';
import UserPagesidebar from '../components/molecules/UserPageSidebar';
import { createDBList, deleteDBList, getLists } from '../actions/lists';
import CalendarPage from '../components/pages/CalendarPage';

const UserExperienceRouter = (props) => {
    let { path, url } = useRouteMatch();

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            props.loadLists();
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <>
            {props.auth.userLoggedIn ? (
                <>
                    {loading ? (
                        <div>
                            loading...
                        </div>
                    ) : (
                            <div className='contentWrapper'>
                                <div className='contentInner'>
                                    {/* <UserPageTopBar /> */}
                                    <UserPageTabs />
                                    <Switch>
                                        <Route exact path={path} component={UserDashboard} />
                                        <Route path={`${path}/list/:listID`} component={ListInfoPage} />
                                        <Route path={`${path}/lists`} component={ListViewPage} />
                                        {/* <Route path={`${path}/calendar`} component={CalendarPage} /> */}
                                        <Route path={`${path}/stats`} component={StatsPage} />
                                    </Switch>
                                </div>
                                <UserPagesidebar />
                            </div>
                        )
                    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        loadLists: () => {
            dispatch(getLists())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserExperienceRouter);
