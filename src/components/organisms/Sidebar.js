import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaListUl, FaCalendar, FaCog, FaHome } from 'react-icons/fa'
import { IoMdStats } from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai';
import NavIcon from '../atoms/NavIcon';
const Sidebar = (props) => {

    return (
        <div className='sidebar'>
            <h2 className='sidebar__appTitle'>tido</h2>
            <div className='sidebar__navMenu'>
                <NavLink to='/' activeClassName='sidebar__navItem--active' className='sidebar__navItem' exact>
                    <NavIcon
                        title='Home'
                        icon={AiFillHome}
                    />
                </NavLink>
                <NavLink to='/lists' activeClassName='sidebar__navItem--active' className='sidebar__navItem' exact>
                    <NavIcon
                        title='Lists'
                        icon={FaListUl}
                    />
                </NavLink>
                <NavLink to='/schedule' activeClassName='sidebar__navItem--active' className='sidebar__navItem'>
                    <NavIcon
                        title='Schedule'
                        icon={FaCalendar}
                    />
                </NavLink>
                <NavLink to='/stats' activeClassName='sidebar__navItem--active' className='sidebar__navItem'>
                    <NavIcon
                        title='Stats'
                        icon={IoMdStats}
                    />
                </NavLink>
            </div>
            <ul className='sidebar__bottomBar'>
                <NavLink to='/settings' activeClassName='sidebar__navItem--active' className='sidebar__navItem'>
                    <NavIcon
                        title='Settings'
                        icon={FaCog}
                    />
                </NavLink>
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}


export default connect(mapStateToProps)(Sidebar);