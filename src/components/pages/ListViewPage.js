import React from 'react';
import PageTitle from '../atoms/PageTitle';
import ListCard from '../molecules/ListCard';
import { connect } from 'react-redux';
import ListPreview from '../molecules/ListPreview';
import { addTaskToList } from '../../actions/lists';

const ListViewPage = (props) => {

    const newTaskHandler = (listID, taskName) => {
        console.log('listID:',listID)
        console.log('taskName:',taskName)
        props.dispatch(addTaskToList({listID, taskName}))
    }

    return (
        <div className='page'>
            <PageTitle>lists</PageTitle>
            <div className='listViewPage__listGroup'>
                {props.lists.map((list) => (
                    <ListPreview
                    key={list.listName}
                    newTaskHandler={newTaskHandler}
                    {...list}/>
                ))}
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