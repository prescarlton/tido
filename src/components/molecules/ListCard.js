import React from 'react';

const ListCard = (props) => {
    return (
        <div className='listCard'>
        <h3 className='listCard__listName'>{props.listName}</h3>
        <h2 className='listCard__taskCount'>{props.tasks.length}</h2>
        </div>
    )
}

export default ListCard;