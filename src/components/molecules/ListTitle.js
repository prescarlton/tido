import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ListTitle = (props) => {
    return (
        <div className='listTitle__wrapper'>
            <Link to='/app/lists' className='backArrow__wrapper'>
                <FaArrowLeft className='backArrow' />
            </Link>
            <h1 className='listTitle'>{props.title}</h1>
        </div>
    )
}

export default ListTitle;