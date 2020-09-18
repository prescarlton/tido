import React, { useEffect, useState } from 'react';
import { BsAlarm, BsFlag } from 'react-icons/bs';
import { FaFlag, FaRegFlag } from 'react-icons/fa';
import { GrFlag } from 'react-icons/gr';
import { FiFlag } from 'react-icons/fi';

const NewTaskForm = (props) => {


    // handler for user trying to escape from newTaskForm
    const escKeyHandler = (e) => {
        if (e.keyCode === 27) {
            props.onCancelHandler();
        }
    }

    const [taskNameVal, setTaskNameVal] = useState('');
    const [taskPriorityVal, setTaskPriorityVal] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmitHandler(taskNameVal);
    }
    const handleTaskNameChange = (e) => {
        setTaskNameVal(e.target.value);
    }

    const handleTaskPriorityChange = (e) => {
        setTaskPriorityVal(e.target.value);
    }
    useEffect(() => {
        document.addEventListener("keydown", escKeyHandler, false);

        return () => {
            document.removeEventListener("keydown", escKeyHandler, false);
        }

    }, [])

    return (
        <form
            onSubmit={submitHandler}
            onReset={props.onCancelHandler}
            className='listItem__container newTaskForm'>
            <div className='newTaskForm__innerGroup'>
                <input
                    name='taskName'
                    placeholder='e.g. Take the trash out'
                    className='newTaskForm__Input'
                    value={taskNameVal}
                    onChange={handleTaskNameChange}
                    required
                    autoFocus
                />
                {/* <div className='newTaskForm__iconGroup'>
                    <FiFlag className='newTaskForm__icon newTaskForm__icon--priorityFlag' />
                    <BsAlarm className='newTaskForm__icon newTaskForm__icon--alarm' />
                </div> */}


            </div>
            <div className='newTaskForm__buttonGroup'>
                <button type='reset' className='button button--noBox'>Cancel</button>
                <button type='submit' className='button button--danger'>
                    Add Item
                </button>
            </div>
        </form>
    )

}

export default NewTaskForm;