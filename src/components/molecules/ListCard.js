import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = (props) => {
    return (
        <Link to={`/list/${props.id}/`} className='listCard'>
            {/* <div className='listCard'> */}
                <div className='listCard__titleGroup'>
                    <h3 className='listCard__listName'>{props.listName}</h3>
                    <p className='listCard__taskCount'>{props.tasks.length} tasks</p>
                </div>
            {/* </div> */}
        </Link>
    )
}

export default ListCard;