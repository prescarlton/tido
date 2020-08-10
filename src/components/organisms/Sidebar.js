import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const Sidebar = (props) => {
    console.log(props);
    return (
        <div className='sidebar'>
            <h2 className='sidebar__appTitle'>tido</h2>
            <div className='sidebar__navMenu'>
                <NavLink to='/' activeClassName='sidebar__navItem--active' className='sidebar__navItem' exact>Home</NavLink>
                {props.lists.map((list) => {
                    // get listName from list data
                    const listName = list.listName;
                    const listID = list.id;
                    console.log(listName);
                    return (
                        <NavLink to={`/list/${listID}/`} key={listName} activeClassName='sidebar__navItem--active' className='sidebar__navItem'>{listName}</NavLink>
                    )
                })}
            </div>
            <ul className='sidebar__bottomBar'>
                {/* TODO lol */}
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