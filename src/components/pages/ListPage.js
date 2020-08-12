import React from 'react';
import { connect } from 'react-redux';
import List from '../organisms/List';
import ListNotFoundPage from './ListNotFoundPage';
import { completeTask } from '../../actions/lists';

class ListPage extends React.Component {

    taskClickHandler = (taskID) => {
        // find the list that the item is in
        this.props.dispatch(completeTask({ listID: this.props.listID, taskID }));
    }

    render() {
        // grab the data for the list matching the given ID
        console.log(this.props.list)
        // if the list with given ID cannot be found,
        // show ListNotFound rather than List component

        return (this.props.list ?
            (<List
                title={this.props.list.listName}
                tasks={this.props.list.tasks}
                taskClickHandler={this.taskClickHandler}
            />) : (
                // temporary
                <ListNotFoundPage />
            )

        )
    }
};

const mapStateToProps = (state, props) => {

    return {
        list: state.lists.find((list) => list.id === props.match.params.listID)
    }

};

export default connect(mapStateToProps)(ListPage);