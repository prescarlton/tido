import React from 'react';

const TasksCompletedWidget = (props) => {
    const tasksCompleted = props.timeframe == 'week' ? 13 : props.timeframe == 'month' ? 78 : 572
    const timeframe = props.timeframe == 'week' ? 'This week' : props.timeframe == 'month' ? 'This month' : 'To date'
    return (
        <div className='tasksCompletedWidget'>
            <h1>{tasksCompleted}</h1>
            <h3>Tasks Completed {timeframe}</h3>
        </div>
    )
}

export default TasksCompletedWidget;