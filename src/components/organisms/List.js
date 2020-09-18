import React, { useState } from 'react';
import ListItem from '../molecules/ListItem';
import ListTitle from '../molecules/ListTitle';
import AddItemButton from '../atoms/AddTaskButton';
import NewTaskForm from '../atoms/NewTaskForm';
import AddTaskButton from '../atoms/AddTaskButton';
import { addTaskToList } from '../../actions/lists';
import EditList from '../modals/EditList';

const List = (props) => {

    const [showTaskForm, setShowTaskForm] = useState(false);
    const [showEditListMenu, setShowEditListMenu] = useState(false);
    const [listTitle, setListTitle] = useState(props.title);

    const handleAddTaskClick = () => {
        setShowTaskForm(true);
    }

    const newTaskSubmitHandler = (taskName) => {
        props.newTaskHandler(taskName);
        setShowTaskForm(false);
    }

    const newTaskCancelHandler = () => {
        setShowTaskForm(false);
    }

    const handleEditListClick = () => {
        setShowEditListMenu(true);
    }

    const handleHideEditListModal = () => {
        setShowEditListMenu(false);
    }
    const handleEditListSubmit = (newListName) => {
        props.editListHandler(props.id, newListName)
        setListTitle(newListName);
        setShowEditListMenu(false);
    }

    return (
        <div className='list'>
            <ListTitle
                title={listTitle}
                handleMenuClick={handleEditListClick}
            />
            <h3>Uncompleted Tasks</h3>
            <div className='listContainer'>
                {props.tasks.map((task) => {
                    //get all necessary data from item's object
                    if (!task.completed)
                        return (
                            <ListItem
                                key={task.name}
                                title={task.name}
                                completed={task.completed}
                                priority={task.priority}
                                id={task.id}
                                // onClickHandler={props.taskClickHandler}
                                onClickHandler={props.completeTaskHandler}
                                trashClickHandler={props.trashClickHandler}

                            />
                        )
                })}
                {/* check if addTaskButton or newTaskForm should be shown */}
                {showTaskForm ? (
                    <NewTaskForm
                        onSubmitHandler={newTaskSubmitHandler}
                        onCancelHandler={newTaskCancelHandler}
                    />
                ) : (
                        <AddTaskButton
                            onClickHandler={handleAddTaskClick}
                        />
                    )}
            </div>
            <h3>Completed Tasks</h3>
            <div className='listContainer'>
                {props.tasks.map((task) => {
                    //get all necessary data from item's object
                    if (task.completed)
                        return (
                            <ListItem
                                key={task.name}
                                title={task.name}
                                completed={task.completed}
                                priority={task.priority}
                                id={task.id}
                                // onClickHandler={props.taskClickHandler}
                                onClickHandler={props.completeTaskHandler}
                                trashClickHandler={props.trashClickHandler}

                            />
                        )
                })}
            </div>
            <EditList
                isOpen={showEditListMenu}
                handleClose={handleHideEditListModal}
                listTitle={props.title}
                handleFormSubmit={handleEditListSubmit}
            />
        </div>
    )

}

export default List;