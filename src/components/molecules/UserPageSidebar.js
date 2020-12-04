import React from 'react';
import { FiSearch, FiSettings, FiBell } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const UserPagesidebar = () => {
    return (
        <div className='userPageSidebar'>
            <ul className='userPageSidebar__actions'>
                <li><FiSearch className='icon' /></li>
                <li><FiBell className='icon' /></li>
                
                <li><NavLink to='/app/settings'><FiSettings className='icon' /></NavLink></li>
                <li></li>
            </ul>
        </div>
    )
}

export default UserPagesidebar;