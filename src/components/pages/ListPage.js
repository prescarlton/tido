import React from 'react';
import { connect } from 'react-redux';
import List from '../organisms/List';
import ListNotFoundPage from './ListNotFoundPage';

const ListPage = (props) => {

    // grab the data for the list matching the given ID
    console.log(props.list)
    return ( props.list ?
        (<List
            title={props.list.listName}
            tasks={props.list.tasks}
        />) : (
            // temporary
            <ListNotFoundPage/>
        )
        
    )
};

const mapStateToProps = (state, props) => {

    return {
        list: state.lists.find((list) => list.id === props.match.params.listID)
    }

};

export default connect(mapStateToProps)(ListPage);