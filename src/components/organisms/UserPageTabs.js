import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import NewListModal from '../atoms/NewListModal';
import { connect } from 'react-redux';
import { createDBList } from '../../actions/lists';
const UserPageTabs = (props) => {
    let { path, url } = useRouteMatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showNewListModal, setShowNewListModal] = useState(false);
    const handleShowMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    const handleNewListClose = () => {
        setShowNewListModal(false);
    }
    const handleShowNewListDialog = () => {
        setShowNewListModal(true);
        setShowMenu(false);
    }

    const newListHandler = (listName) => {
        props.createList({ listName });
        console.log('new list click')
        handleNewListClose();
    }

    return (
        <div className='userPageTabs'>
            <div className='userPageTabs__left'>
                <NavLink to='/app' activeClassName='userPageTabs__navItem--active' className='userPageTabs__navItem' exact>Home</NavLink>
                <NavLink to={`/app/lists`} activeClassName='userPageTabs__navItem--active' className='userPageTabs__navItem'>Lists</NavLink>
                <NavLink to='/app/calendar' activeClassName='userPageTabs__navItem--active' className='userPageTabs__navItem'>Calendar</NavLink>
                <NavLink to='/app/kanban' activeClassName='userPageTabs__navItem--active' className='userPageTabs__navItem'>Kanban</NavLink>
                {/* <NavLink to='/app/stats' activeClassName='userPageTabs__navItem--active' className='userPageTabs__navItem'>Stats</NavLink> */}
            </div>
            <ul className='userPageTabs__right'>
                {/* <button className={`button--action button createBtn ${showMenu && 'menuOpen'}`} onClick={handleShowMenu}>
                    <BsPlus className={`${showMenu && 'plusBtn--rotated'} plusBtn`} /> <span>{showMenu ? 'Cancel' : 'Create'}</span>
                </button> */}
                <div className={`createBtn ${showMenu && 'menuOpen'}`} >
                    <div className='createBtn--title' onClick={handleShowMenu}>
                        <BsPlus className={`${showMenu && 'plusBtn--rotated'} plusBtn`} /> <span>{showMenu ? 'Cancel' : 'Create'}</span>
                    </div>

                    <ul className='createBtn--menu'>
                        <li onClick={handleShowNewListDialog}>List</li>
                        <li>Event</li>
                    </ul>

                </div>
            </ul>
            <NewListModal
                isOpen={showNewListModal}
                handleSubmit={newListHandler}
                handleClose={handleNewListClose}
            />
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createList: (listName) => {
            dispatch(createDBList(listName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageTabs);