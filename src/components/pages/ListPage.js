import React from 'react';
import { connect } from 'react-redux';
import List from '../organisms/List';
import ListNotFoundPage from './ListNotFoundPage';
import { deleteTask, addTaskToList, deleteDBList, updateDBTask, createDBTask } from '../../actions/lists';
import ConfirmModal from '../atoms/ConfirmModal';

class ListPage extends React.Component {

    state = {
        showConfirmModal: false,
        toBeDeleted: ''
    }

    taskClickHandler = (taskID) => {
        // find the list that the item is in
        // this.props.dispatch(completeTask({ listID: this.props.listID, taskID }));
        console.log('completing task w/ id ',taskID)
        this.props.completeTask(taskID, true);

    }
    // handler to confirm taskDeletion
    trashClickHandler = (taskID) => {
        this.setState(() => ({
            showConfirmModal: true
        }))
        this.setState(() => ({
            toBeDeleted: taskID
        }))
    }

    handleModalClose = () => {
        this.setState(() => ({
            showConfirmModal: false
        }));
    }

    handleConfirmDelete = () => {

        this.props.dispatch(deleteTask({ listID: this.props.id, taskID: this.state.toBeDeleted }))

        // reset state to empty obj
        this.setState(() => ({
            toBeDeleted: '',
            showConfirmModal: false
        }))
    }

    newTaskHandler = (name) => {
        this.props.createTask(name, this.props.list.id);
    }

    render() {
        // grab the data for the list matching the given ID
        // if the list with given ID cannot be found,
        // show ListNotFound rather than List component
        return (this.props.list ?
            (<div className='listPage'>
                {/* <h1>All Lists</h1> */}
                <List
                    title={this.props.list.name}
                    tasks={this.props.list.tasks}
                    completeTaskHandler={this.taskClickHandler}
                    trashClickHandler={(e) => { this.trashClickHandler(e) }}
                    newTaskHandler={this.newTaskHandler}

                />
                <ConfirmModal
                    isOpen={this.state.showConfirmModal}
                    onModalClose={this.handleModalClose}
                    modalTitle='Are you sure?'
                    handleConfirm={this.handleConfirmDelete}

                />
            </div>) : (
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: (listID) => {
            dispatch(deleteDBList(listID))
        },
        createTask: (name, taskListID) => {
            dispatch(createDBTask(name, taskListID))
        },
        completeTask: (taskID, completed) => {
            dispatch(updateDBTask(taskID, completed))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);