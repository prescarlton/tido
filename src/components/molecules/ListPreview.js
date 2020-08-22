import React, { useState, useEffect } from 'react';
import TaskOverview from '../atoms/TaskOverview';
import { makeSlug } from '../../utils/slugs';
import { BsThreeDots } from 'react-icons/bs';
import ListPreviewNewTask from '../atoms/ListPreviewNewTask';
import NewTaskForm from '../atoms/NewTaskForm';

const ListPreview = (props) => {

    const [showTaskForm, setShowTaskForm] = useState(false);

    const newTaskHandler = () => {
        setShowTaskForm(true);
    }

    const newTaskSubmitHandler = (taskName) => {
        props.newTaskHandler(props.id, taskName);
        setShowTaskForm(false);
    }

    const newTaskCancelHandler = () => {
        setShowTaskForm(false);
    }

    return (
        <div className='listPreview'>
            <h2 className='listPreview__title'>{props.listName} <BsThreeDots className='listPreview__title__dots' /></h2>
            <div className='listPreview__taskContainer'>
                {props.tasks.map((task) => (
                    <TaskOverview
                        key={task.name}
                        task={task}
                    />
                ))}

                {/* check if addTaskButton or newTaskForm should be shown */}
                {showTaskForm ? (
                    <NewTaskForm
                        onSubmitHandler={newTaskSubmitHandler}
                        onCancelHandler={newTaskCancelHandler}
                    />
                ) : (
                        <ListPreviewNewTask
                            newTaskHandler={newTaskHandler}
                        />
                    )}


            </div>
        </div>
    )
}

export default ListPreview;