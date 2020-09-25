import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ListCard = (props) => {

    const [showMenu, setShowMenu] = useState(false);
    let taskCount = props.tasks.length;
    let completedTasks = 0;

    props.tasks.forEach(task => {
        if (task.completed)
            completedTasks += 1
    });

    let uncompletedTasks = taskCount - completedTasks;

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    const handleDeleteList = () => {
        props.handleDeleteList(props.id);
    }

    return (
        <div className='listCard'>
            <Link className='listCard__titleGroup' to={`/app/list/${props.id}/`}>
                <h3 className='listCard__listName'>{props.name}</h3>
                <div className='listCard__taskTags'>

                    {(uncompletedTasks > 0 ? (
                        <div className='listCard__taskTag listCard__taskTag--red'>
                            {uncompletedTasks} To-do
                        </div>
                    ) : <></>)}

                </div>
            </Link>
            <div className='listCard__bottom'>
                <p className='listCard__taskCount'>{props.tasks.length} tasks</p>
                <div className='listCard__menu'>
                    <p className={`listCard__menu__deleteList ${showMenu && 'deleteList--visible'} link`} onClick={handleDeleteList}>Delete List</p>
                    <BsThreeDotsVertical className='listCard__threeDots' onClick={handleShowMenu} />
                </div>
            </div>
        </div>
    )
}

export default ListCard;