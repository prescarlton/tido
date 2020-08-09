import React from 'react';
import List from '../components/organisms/List';

export default class TodoList extends React.Component {
    state = {
        items: [
            {
                name: 'email company',
                completed: true,
                completedAt: '',
                due: ''
            },
            {
                name: 'walk dogs',
                completed: true,
                completedAt: '',
                due: ''
            },
            {
                name: 'build ofice',
                completed: false,
                completedAt: '',
                due: ''
            },
            {
                name: 'make tido app',
                completed: false,
                completedAt: '',
                due: ''
            }
        ]
    }

    itemClickHandler = (e) => {
        console.log(e);
    }

    render() {
        return (
            <List
                title='To-do List'
                items={this.state.items}
                itemClickHandler={this.itemClickHandler}
            />
        )
    }

}