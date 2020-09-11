import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListCard from '../molecules/ListCard';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import NewListModal from '../atoms/NewListModal';
import { newList } from '../../actions/lists';

import TodayWidget from '../dashboardWidgets/TodayWidget';
import TasksCompletedWidget from '../dashboardWidgets/TasksCompletedWidget';

const UserDashboard = (props) => {
    console.log(props.lists);
    let { path, url } = useRouteMatch();

    const [newListModalShown, setNewListModalShown] = useState(false);

    const showNewListModal = () => {
        setNewListModalShown(true)
    }

    const hideNewListModal = () => {
        setNewListModalShown(false)
    }

    const handleNewListCreation = (listName) => {
        props.dispatch(newList({ listName }))
        setNewListModalShown(false)
    }

    return (
        <div className='page'>
            <div className='widgetRow'>
                <TodayWidget />
            </div>
            <div className='widgetRow'/>
            <div className='widgetRow'>
                <h1 className='widgetTitle'>On deck today</h1>
            </div>
            <div className='widgetRow'>
                <h2>No tasks left for today! Good job!</h2>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(UserDashboard);