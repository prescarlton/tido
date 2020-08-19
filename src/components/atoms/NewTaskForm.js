import React, { useEffect, useState } from 'react';

const NewTaskForm = (props) => {


    // handler for user trying to escape from newTaskForm
    const escKeyHandler = (e) => {
        if (e.keyCode === 27) {
            props.onCancelHandler();
        }
    }

    const [taskNameVal, setTaskNameVal] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmitHandler(taskNameVal);
    }
    const handleTaskNameChange = (e) => {
        setTaskNameVal(e.target.value);
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
            <input
                name='taskName'
                placeholder='e.g. Take the trash out'
                className='newTaskForm__Input'
                value={taskNameVal}
                onChange={handleTaskNameChange}
                required
                autoFocus
            />
            <div className='newTaskForm__buttonGroup'>
                <button type='reset' className='button button--secondary'>Cancel</button>
                <button type='submit' className='button button--danger'>
                    Add Item
                </button>
            </div>
        </form>
    )

}

export default NewTaskForm;