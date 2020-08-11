import React from 'react';
import { connect } from 'react-redux';
import ListCard from '../molecules/ListCard';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    console.log(props.lists);
    return (
        <div className='homePage page'>
            <h1 className='homepage__pageHead'>welcome to tido.</h1>

            {/* lists section */}
            <h2 className='homepage__sectionHead'>Lists</h2>
            {/* if there are lists, show a card for each.
            if not, show 'no lists' message */}
            
            {props.lists.length > 0 ? props.lists.map((list) => (
                <ListCard
                    key={list.listName}
                    {...list}
                />
            )) : (
                    <h3>Looks like you don't have any lists yet. Click the + button to make your first list.</h3>
                )
            }

            {/* stats section */}
            <h2 className='homepage__sectionHead'>Stats - Coming Soon</h2>
            <Link to='/create/'><div className='homepage__newListLink' >+</div></Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(HomePage);