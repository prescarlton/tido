import React from 'react';
import { connect } from 'react-redux';
import List from '../organisms/List';
import ListNotFoundPage from './ListNotFoundPage';
import { completeTask, deleteTask, addTaskToList } from '../../actions/lists';
import ConfirmModal from '../atoms/ConfirmModal';

class ListPage extends React.Component {

    state = {
        showConfirmModal: false,
        toBeDeleted: ''
    }

    taskClickHandler = (taskID) => {
        // find the list that the item is in
        this.props.dispatch(completeTask({ listID: this.props.listID, taskID }));
    }
    // handler to confirm taskDeletion
    trashClickHandler = (taskID) => {
        this.setState(() => ({
            showConfirmModal: true
        }))
        this.setState(()=>({
            toBeDeleted:taskID
        }))
    }

    handleModalClose = () => {
        this.setState(() => ({
            showConfirmModal: false
        }));
    }

    handleConfirmDelete = () => {

        this.props.dispatch(deleteTask({listID:this.props.id,taskID:this.state.toBeDeleted}))

        // reset state to empty obj
        this.setState(() => ({
            toBeDeleted:'',
            showConfirmModal:false
        }))
    }

    newTaskHandler = (taskName) => {
        this.props.dispatch(addTaskToList({listID:this.props.id,taskName}))
    }

    render() {
        // grab the data for the list matching the given ID
        console.log(this.props.list)
        // if the list with given ID cannot be found,
        // show ListNotFound rather than List component

        return (this.props.list ?
            (<div className='listPage'>
                <List
                    title={this.props.list.listName}
                    tasks={this.props.list.tasks}
                    taskClickHandler={this.taskClickHandler}
                    trashClickHandler={(e)=>{this.trashClickHandler(e)}}
                    newTaskHandler={this.newTaskHandler}

                />
                <ConfirmModal
                    isOpen={this.state.showConfirmModal}
                    onModalClose={this.handleModalClose}
                    modalTitle='Are you sure?'
                    handleConfirm={this.handleConfirmDelete}

                />
            </div>) : (
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