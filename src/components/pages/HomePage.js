import React from 'react';
import { connect } from 'react-redux';
import ListCard from '../molecules/ListCard';

const HomePage = (props) => {
    console.log(props.lists);
    return (
        <div className='homePage'>
            <h1>welcome to tido.</h1>
            <h2>Lists</h2>
            {props.lists.length > 0 ? props.lists.map((list) => {
                return <ListCard
                    key={list.listName}
                    {...list}
                />
            }) : (
                    <h3>Looks like you don't have any lists yet. Click the + button to make your first list.</h3>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(HomePage);