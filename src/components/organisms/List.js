import React, { useState } from 'react';
import ListItem from '../molecules/ListItem';
import ListTitle from '../molecules/ListTitle';
import AddItemButton from '../atoms/AddTaskButton';
import NewTaskForm from '../atoms/NewTaskForm';
import AddTaskButton from '../atoms/AddTaskButton';
import { addTaskToList } from '../../actions/lists';

const List = (props) => {

    const [showTaskForm, setShowTaskForm] = useState(false);

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

    return (
        <div className='list'>
            <ListTitle
                title={props.title}
            />
            <div className='listContainer'>
                {props.tasks.map((task) => {
                    //get all necessary data from item's object
                    let isCompleted = task.completed;
                    let isPriority = task.priority;

                    return (
                        <ListItem
                            key={task.name}
                            title={task.name}
                            checked={isCompleted}
                            priority={isPriority}
                            id={task.id}
                            onClickHandler={props.taskClickHandler}
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
                            onClickHandler = {handleAddTaskClick}
                        />
                    )}
            </div>

        </div>
    )

}

export default List;