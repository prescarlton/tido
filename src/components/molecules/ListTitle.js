import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

const ListTitle = (props) => {
    return (
        <div className='listTitle__wrapper'>
            <div className='listTitle__group'>
                <Link to='/app/lists' className='backArrow__wrapper'>
                    <FaArrowLeft className='listTitle__icon link' />
                </Link>
                <h1 className='listTitle'>{props.title}</h1>
            </div>
            <div className='listTitle__group'>
                <BsThreeDots className='listTitle__icon link' onClick={props.handleMenuClick}/>
            </div>
        </div>
    )
}

export default ListTitle;