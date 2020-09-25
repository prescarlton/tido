import React, { useState } from 'react';
import { BsAlarm, BsPencil, BsThreeDots } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { FiFlag } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';

const TaskInfo = (props) => {

    // const [listName, setListName] = useState(props.listTitle);
    const [taskDescription, setTaskDescription] = useState(props.description);
    const [showDescriptionEdit, setShowDescriptionEdit] = useState(false);
    const handleOnClose = (e) => {
        setShowDescriptionEdit(false);
        props.handleClose();
    }

    const toggleShowDescriptionEdit = () => {
        if (showDescriptionEdit) {
            setShowDescriptionEdit(false);
        } else {
            setShowDescriptionEdit(true);
        }
    }

    const handleDescriptionEdit = (e) => {
        console.log('yes')
        setTaskDescription(e.target.value);
    }
    const handleDescriptionSubmit = () => {
        props.handleDescriptionSubmit(props.id, taskDescription)
        toggleShowDescriptionEdit();
    }

    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
            className='modal modal--wide'
            onRequestClose={handleOnClose}
        >
            <div className='modal__topBar'>
                <GrClose className='modal__Close link' onClick={handleOnClose} />
                <div className='modal__headerGroup'>
                    <h2 className='modal__Title'>
                        <button
                            className={`listItem__checkbox listItem__checkbox--in-modal ${props.completed && 'listItem__checkbox--checked'}`}
                            onClick={() => {
                                props.onClickHandler(props.id, !props.completed)
                            }}

                        />
                        {props.title}
                    </h2>
                    {/* <h4 className='modal__subtitle'>in list {props.listName}</h4> */}
                </div>

            </div>
            {/* <div className='modal__iconGroup fullWidth'>
                <FiFlag className='icon' />
                <BsAlarm className='icon' />
                <BsPencil className='icon' />
                <BsThreeDots className='icon' />
            </div> */}
            <div className='fullWidth flex flex-column taskInfo__group'>
                <h3 onClick={toggleShowDescriptionEdit}>Description</h3>
                {(showDescriptionEdit ? (
                    <span className='taskInfo__description fullWidth'>
                        <textarea
                            className='taskInfo__descriptionEdit fullWidth'
                            onChange={handleDescriptionEdit}
                            value={taskDescription}
                            rows={4}
                            autoFocus
                            />
                        <button
                            className='button button--action taskInfo__descriptionEditSave'
                            onClick={handleDescriptionSubmit}
                            >
                            Save
                    </button>
                    </span>
                ) : (
                        <p className='taskInfo__description'>{!!taskDescription ? taskDescription : 'No description.'}</p>
                    ))}

            </div>
        </Modal>

    )
}

export default TaskInfo;