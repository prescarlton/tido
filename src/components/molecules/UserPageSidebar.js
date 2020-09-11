import React from 'react';
import { FiSearch, FiSettings, FiBell } from 'react-icons/fi';
const UserPagesidebar = () => {
    return (
        <div className='userPageSidebar'>
            <ul className='userPageSidebar__actions'>
                <li><FiSearch className='icon' /></li>
                <li><FiBell className='icon' /></li>
                <li><FiSettings className='icon' /></li>
                <li></li>
            </ul>
        </div>
    )
}

export default UserPagesidebar;