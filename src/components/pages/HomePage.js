import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListCard from '../molecules/ListCard';
import { Link } from 'react-router-dom';
import NewListModal from '../atoms/NewListModal';
import { newList } from '../../actions/lists';
import PageTitle from '../atoms/PageTitle';

const HomePage = (props) => {
    console.log(props.lists);

    const [newListModalShown, setNewListModalShown] = useState(false);

    const showNewListModal = () => {
        setNewListModalShown(true)
    }

    const hideNewListModal = () => {
        setNewListModalShown(false)
    }

    const handleNewListCreation = (listName) => {
        props.dispatch(newList({listName}))
        setNewListModalShown(false)
    }

    return (
        <div className='page'>
            <PageTitle>dashboard</PageTitle>

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
            <div className='homepage__newListLink' onClick={showNewListModal}>+</div>
        <NewListModal
            isOpen={newListModalShown}
            handleClose={hideNewListModal}
            handleSubmit={handleNewListCreation}
        />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(HomePage);