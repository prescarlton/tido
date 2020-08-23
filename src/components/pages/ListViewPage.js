import React, { useState } from 'react';
import PageTitle from '../atoms/PageTitle';
import ListCard from '../molecules/ListCard';
import { connect } from 'react-redux';
import ListPreview from '../molecules/ListPreview';
import { addTaskToList, newList } from '../../actions/lists';
import ListViewCreateList from '../atoms/ListViewCreateList';

const ListViewPage = (props) => {

    const [showNewListForm, setShowNewListForm] = useState(false);

    const newTaskHandler = (listID, taskName) => {
        console.log('listID:', listID)
        console.log('taskName:', taskName)
        props.dispatch(addTaskToList({ listID, taskName }))
    }

    const handleNewListClick = () => {
        setShowNewListForm(true);
    }

    const newListHandler = (listName) => {
        props.dispatch(newList({listName}))
        closeListFormHandler();
    }

    const closeListFormHandler = () => {
        setShowNewListForm(false);
    }


    return (
        <div className='page'>
            <PageTitle>lists</PageTitle>
            <div className='listViewPage__listGroup'>
                {props.lists.map((list) => (
                    <ListPreview
                        key={list.listName}
                        newTaskHandler={newTaskHandler}
                        {...list} />
                ))}


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

export default connect(mapStateToProps)(ListViewPage);