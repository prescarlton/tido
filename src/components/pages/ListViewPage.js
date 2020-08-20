import React from 'react';
import PageTitle from '../atoms/PageTitle';
import ListCard from '../molecules/ListCard';
import { connect } from 'react-redux';
import ListPreview from '../molecules/ListPreview';

const ListViewPage = (props) => {
    return (
        <div className='page'>
            <PageTitle>lists</PageTitle>
            <div className='listViewPage__listGroup'>
                {props.lists.map((list) => (
                    <ListPreview
                    key={list.listName}
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