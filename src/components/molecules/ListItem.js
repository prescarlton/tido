import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import TaskInfo from '../modals/TaskInfo';

const ListItem = (props) => {

    const [showTaskInfoMenu, setShowTaskInfoMenu] = useState(false);

    const handleHideTaskInfoMenu = () => {
        setShowTaskInfoMenu(false);
    }

    const handleShowTaskInfoMenu = () => {
        setShowTaskInfoMenu(true);
        console.log(props.description);
    }

    return (
        <div className='listItem__container'>

            <div className='listItem__titleContainer'>
                <button
                    className={`listItem__checkbox ${props.completed && 'listItem__checkbox--checked'}`}
                    onClick={() => {
                        props.onClickHandler(props.id, !props.completed)
                    }}

                />
                <h3 onClick={handleShowTaskInfoMenu} className={`listItem__title ${props.completed && 'listItem__title--checked'}`}>{props.title}</h3>
            </div>
            <div className='listItem__buttonGroup'>
                <FaRegTrashAlt onClick={() => { props.trashClickHandler(props.id) }} className='icon' />
            </div>
            <TaskInfo
                isOpen={showTaskInfoMenu}
                handleClose={handleHideTaskInfoMenu}
                title={props.title}
                completed={props.completed}
                description={props.description}
                listName={props.listName}
                handleDescriptionSubmit={props.handleDescriptionSubmit}
                id={props.id}
            />
        </div>
    )
}

export default ListItem;