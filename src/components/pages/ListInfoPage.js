import React, { useState } from 'react';
import { connect } from 'react-redux';
import List from '../organisms/List';
import ListNotFoundPage from './ListNotFoundPage';
import { deleteTask, addTaskToList, deleteDBList, updateDBTask, createDBTask, updateDBList, deleteDBTask, completeDBTask } from '../../actions/lists';
import ConfirmModal from '../atoms/ConfirmModal';

// class ListInfoPage extends React.Component {
const ListInfoPage = (props) => {

    const [toBeDeleted, setToBeDeleted] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const taskClickHandler = (taskID, completed) => {
        // find the list that the item is in
        console.log('completing task w/ id ', taskID)
        props.completeTask(props.list.id, taskID, completed);

    }
    // handler to confirm taskDeletion
    const trashClickHandler = (taskID) => {
        setShowConfirmModal(true);
        setToBeDeleted(taskID);
    }

    const handleModalClose = () => {
        setShowConfirmModal(false);
    }

    const handleConfirmDelete = () => {
        console.log('listID:', props.list.id);
        console.log('toBeDeleted:', toBeDeleted);
        props.deleteTask(props.list.id, toBeDeleted);
        setToBeDeleted('');
        setShowConfirmModal(false);
    }

    const newTaskHandler = (name) => {
        props.createTask(name, props.list.id);
    }
    const editListHandler = (listID, newListName) => {
        props.updateList(listID, newListName);
    }

    const handleTaskDescriptionSubmit = (taskID, description) => {
        console.log('listID:', props.list.id);
        console.log('taskID:', taskID);
        console.log('description:', description);
        props.updateTaskDescription(props.list.id, taskID, description);
    }

    // grab the data for the list matching the given ID
    // if the list with given ID cannot be found,
    // show ListNotFound rather than List component
    return (props.list ?
        (<div className='listPage'>
            {/* <h1>All Lists</h1> */}
            <List
                title={props.list.name}
                tasks={props.list.tasks}
                id={props.list.id}
                completeTaskHandler={taskClickHandler}
                trashClickHandler={trashClickHandler}
                newTaskHandler={newTaskHandler}
                editListHandler={editListHandler}
                handleTaskDescriptionSubmit={handleTaskDescriptionSubmit}
            />
            <ConfirmModal
                isOpen={showConfirmModal}
                onModalClose={handleModalClose}
                modalTitle='Are you sure?'
                handleConfirm={handleConfirmDelete}

            />
        </div>) : (
            <ListNotFoundPage />
        )

    )

};

const mapStateToProps = (state, props) => {

    return {
        list: state.lists.find(l => {
            return props.match.params.listID == l.id
        })
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
        completeTask: (listID, taskID, completed) => {
            dispatch(completeDBTask(listID, taskID, completed))
        },
        updateTaskDescription: (listID, taskID, description) => {
            dispatch(updateDBTask(listID, taskID, description))
        },
        updateList: (listID, newListName) => {
            dispatch(updateDBList(listID, newListName))
        },
        deleteTask: (listID, taskID) => {
            dispatch(deleteDBTask(listID, taskID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListInfoPage);