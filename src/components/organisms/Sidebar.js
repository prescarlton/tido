import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaListUl, FaCalendar, FaCog, FaHome } from 'react-icons/fa'
import { IoMdStats } from 'react-icons/io'
import { AiFillHome } from 'react-icons/ai';
import NavIcon from '../atoms/NavIcon';
const Sidebar = (props) => {
    let { path, url } = useRouteMatch();
    console.log('sidebar path:',path);
    console.log('sidebar url:',url)
    return (
        <div className='sidebar'>
            <h2 className='sidebar__appTitle'>tido</h2>
            <div className='sidebar__navMenu'>
                <NavLink to={`${url}`} activeClassName='sidebar__navItem--active' className='sidebar__navItem' exact>
                    <NavIcon
                        title='Home'
                        icon={AiFillHome}
                    />
                </NavLink>
                <NavLink to={`/app/lists`} activeClassName='sidebar__navItem--active' className='sidebar__navItem'>
                    <NavIcon
                        title='Lists'
                        icon={FaListUl}
                    />
                </NavLink>
                <NavLink to='/app/schedule' activeClassName='sidebar__navItem--active' className='sidebar__navItem'>
                    <NavIcon
                        title='Schedule'
                        icon={FaCalendar}
                    />
                </NavLink>
                <NavLink to='/app/stats' activeClassName='sidebar__navItem--active' className='sidebar__navItem'>
                    <NavIcon
                        title='Stats'
                        icon={IoMdStats}
                    />
                </NavLink>
            </div>
            <ul className='sidebar__bottomBar'>
                <NavLink to='/app/settings' activeClassName='sidebar__navItem--active' className='sidebar__navItem'>
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