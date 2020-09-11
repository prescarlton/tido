import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ListCard = (props) => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='listCard'>
            <Link className='listCard__titleGroup' to={`/app/list/${props.id}/`}>
                <h3 className='listCard__listName'>{props.name}</h3>
                <h4 className='listCard__listModifiedDate'>Created 3d ago</h4>
            </Link>
            <div className='listCard__bottom'>
                <p className='listCard__taskCount'>{props.tasks.length} tasks</p>
                <div className='listCard__menu'>
                    <p className={`listCard__menu__deleteList ${showMenu && 'deleteList--visible'}`}>Delete List</p>
                    <BsThreeDotsVertical className='listCard__threeDots' onClick={handleShowMenu}/>
                </div>
            </div>
        </div>
    )
}

export default ListCard;