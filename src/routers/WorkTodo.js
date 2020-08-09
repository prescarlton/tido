import React from 'react';
import List from '../components/organisms/List';

export default class WorkTodo extends React.Component {
    state = {
        items: [
            {
                name: 'get good at css',
                completed: false,
                completedAt: '',
                due: ''
            },
            {
                name: 'call jeff',
                completed: true,
                completedAt: '',
                due: ''
            },
            {
                name: 'send invoice',
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
                title='Work To-do List'
                items={this.state.items}
                itemClickHandler={this.itemClickHandler}
            />
        )
    }

}