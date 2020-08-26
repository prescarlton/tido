import React, { useState, useEffect } from 'react';
import TaskOverview from '../atoms/TaskOverview';
import { makeSlug } from '../../utils/slugs';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import ListPreviewNewTask from '../atoms/ListPreviewNewTask';
import NewTaskForm from '../atoms/NewTaskForm';

const ListPreview = (props) => {

    const [showTaskForm, setShowTaskForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const newTaskHandler = () => {
        setShowTaskForm(true);
    }

    const newTaskSubmitHandler = (name) => {
        props.newTaskHandler(name, props.id);
        setShowTaskForm(false);
    }

    const newTaskCancelHandler = () => {
        setShowTaskForm(false);
    }

    const menuClickHandler = () => {
        setShowMenu(!showMenu);
        console.log('menu clicked')
    }

    const deleteListClickHandler = () => {
        setShowMenu(false);
        props.deleteListHandler(props.id);
    }

    return (
        <div className='listPreview'>
            <div className='listPreview__title'><h2 className='listPreview__title--text'>{props.name}</h2> <BsThreeDotsVertical onClick={menuClickHandler} className='listPreview__title__dots' /></div>
            
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
            {/* should we show the menu? */}
            {showMenu ? (
                <div className='listPreview__menuContainer'>
                    <p>List Actions</p>
                    <hr className='listPreview__menuDivider'/>
                    <ul className='listPreview__menuList'>
                        <li>Edit list</li>
                        <li onClick={deleteListClickHandler}>Delete list</li>
                        <li>Rearrange lists</li>
                    </ul>
                </div>
            ) : (
                    <></>
                )}
        </div>
    )
}

export default ListPreview;