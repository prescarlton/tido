import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from '../atoms/NavItem';
const Sidebars = () => {
    return (
        <div className='sidebar'>
            <h2 className='sidebar__appTitle'>tido</h2>
            <ul className='sidebar__navMenu'>
                <li ><NavLink to='/' activeClassName='sidebar__navItem--active' className='sidebar__navItem' exact>Home</NavLink></li>
                <li className='sidebar__navItem'><NavLink to='/todo' activeClassName='sidebar__navItem--active' >To-do List</NavLink></li>
                <li className='sidebar__navItem'><NavLink to='/work' activeClassName='sidebar__navItem--active' >Work Tasks</NavLink></li>
            </ul>
            <ul className='sidebar__bottomBar'>

            </ul>
        </div>
    )
};

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2 className='sidebar__appTitle'>tido</h2>
            <div className='sidebar__navMenu'>
                <NavLink to='/' activeClassName='sidebar__navItem--active' className='sidebar__navItem' exact>Home</NavLink>
                <NavLink to='/todo' activeClassName='sidebar__navItem--active' className='sidebar__navItem' >To-do list</NavLink>
                <NavLink to='/work' activeClassName='sidebar__navItem--active' className='sidebar__navItem' >Work Tasks</NavLink>
            </div>
            <ul className='sidebar__bottomBar'>

            </ul>
        </div>
    )
};

export default Sidebar;