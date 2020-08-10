import React from 'react';
import ListItem from '../molecules/ListItem';
import ListTitle from '../molecules/ListTitle';

export default class List extends React.Component {

    render() {
        return (
            <div className='list'>
                <ListTitle
                    title={this.props.title}
                />
                {this.props.tasks.map((task) => {
                    //get all necessary data from item's object
                    /* let checked = this.props.items[item].completed; */
                    let checked = task.completed;
                    let isPriority = task.priority;
                    return (
                        <ListItem
                            key={task.name}
                            title={task.name}
                            checked={checked}
                            priority={isPriority}
                            onClickHandler={this.props.itemClickHandler}
                        />
                    )
                })}
            </div>
        )
    }
}