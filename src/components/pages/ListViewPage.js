import React, { useState, useEffect } from 'react';
import PageTitle from '../atoms/PageTitle';
import ListCard from '../molecules/ListCard';
import { connect } from 'react-redux';
import { addTaskToList, newList, getLists, findLists, createDBList, deleteDBList, createDBTask } from '../../actions/lists';
import ListViewCreateList from '../atoms/ListViewCreateList';
import NewListModal from '../atoms/NewListModal';

const ListViewPage = (props) => {

    const [showNewListForm, setShowNewListForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showNewListModal, setShowNewListModal] = useState(false);

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

    useEffect(() => {
        async function fetchData() {
            props.loadLists();
        }
        fetchData();
    }, [])

    const handleNewListClick = () => {
        setShowNewListForm(true);
    }



    const closeListFormHandler = () => {
        setShowNewListForm(false);
    }

    const handleListDeleteClick = (listID) => {
        props.deleteList(listID)
    }


    return (
        <div className='page listViewPage'>
        <PageTitle>Lists</PageTitle>
            { !!props.lists.length ? (props.lists.map(list => {
                console.log(props.lists)
                return (
                    <ListCard
                        key={list.name}
                        handleDeleteList={handleListDeleteClick}
                        {...list} />
                )
            })
            ) : (
                    <div className='listPage__noLists'>
                        <h2>Looks like you don't have any lists yet. Click <span onClick={handleShowNewListDialog} className='link'>here</span> to get started!</h2>

                    </div>
                )}
            <NewListModal
                isOpen={showNewListModal}
                handleSubmit={newListHandler}
                handleClose={handleNewListClose}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadLists: () => {
            dispatch(getLists())
        },
        createList: (listName) => {
            dispatch(createDBList(listName))
        },
        deleteList: (listID) => {
            dispatch(deleteDBList(listID))
        },
        createTask: (name, taskListID) => {
            dispatch(createDBTask(name, taskListID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewPage);