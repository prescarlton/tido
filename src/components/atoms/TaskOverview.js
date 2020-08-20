import React from 'react';

const TaskOverview = (props) => {
    const task = props.task
    console.log(task)
    return (
        <div className='taskOverview'>
            <p className='taskOverview__priority taskOverview__priority--low'>low priority</p>
            <h3 className='taskOverview__title'>{task.name}</h3>
            <p className='taskOverview__dueDate'>Due in 3 days</p>
        </div>
    )
}

export default TaskOverview;