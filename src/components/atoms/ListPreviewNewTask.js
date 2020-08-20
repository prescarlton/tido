import React from 'react';
import { BsPlus } from 'react-icons/bs';
const ListPreviewNewTask = (props) => {

    return (
        <div onClick={props.newTaskHandler} className='listPreviewNewTask'>
            <BsPlus className='listPreviewNewTask__plusBtn' /> <p>add task</p>
        </div>
    )
}

export default ListPreviewNewTask;