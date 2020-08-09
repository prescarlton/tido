import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2 className='sidebar__appTitle'>tido</h2>
            <div className='sidebar__navMenu'>
                <NavLink to='/' activeClassName='sidebar__navItem--active' className='sidebar__navItem' exact>Home</NavLink>
                <NavLink to='/todo' activeClassName='sidebar__navItem--active' className='sidebar__navItem' >To-do list</NavLink>
                {/* <NavLink to='/work' activeClassName='sidebar__navItem--active' className='sidebar__navItem' >Work Tasks</NavLink> */}
            </div>
            <ul className='sidebar__bottomBar'>

            </ul>
        </div>
    )
};

export default Sidebar;