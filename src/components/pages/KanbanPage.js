import React, { useState, useEffect } from 'react';
import PageTitle from '../atoms/PageTitle';
import ListCard from '../molecules/ListCard';
import { connect } from 'react-redux';
import ListPreview from '../molecules/ListPreview';
import { addTaskToList, newList, getLists, findLists, createDBList, deleteDBList, createDBTask } from '../../actions/lists';
import ListViewCreateList from '../atoms/ListViewCreateList';
import { API, graphqlOperation } from 'aws-amplify';
import { ListLists } from '../../wrappedGraphql/queries';

const ListViewPage = (props) => {

    const [showNewListForm, setShowNewListForm] = useState(false);
    const [lists, setLists] = useState([]);

    const newTaskHandler = (name, taskListID) => {
        console.log('listID:', taskListID)
        console.log('taskName:', name)
        props.createTask(name, taskListID)
        // props.dispatch(addTaskToList({ listID, taskName }))
        console.log('add task click');
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

    const newListHandler = (listName) => {
        props.createList({listName});
        console.log('new list click')
        closeListFormHandler();
    }

    const closeListFormHandler = () => {
        setShowNewListForm(false);
    }

    const handleListDeleteClick = (listID) => {
        props.deleteList(listID)
    }


    return (
        <div className='page'>
            <div className='listViewPage__listGroup'>
                {props.lists.map(list => {
                    return (
                        <ListPreview
                            key={list.name}
                            newTaskHandler={newTaskHandler}
                            deleteListHandler={handleListDeleteClick}
                            {...list} />
                    )
                }
                )}

                <ListViewCreateList
                    handleNewListClick={handleNewListClick}
                    showNewListForm={showNewListForm}
                    handleClose={closeListFormHandler}
                    handleSubmit={newListHandler}
                />

            </div>
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
            dispatch(createDBTask(name,taskListID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewPage);