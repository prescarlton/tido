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
                {this.props.items.map((item) => {
                    //get all necessary data from item's object
                    {/* let checked = this.props.items[item].completed; */}
                    let checked = item.completed;
                    let isPriority = item.priority;
                    return (
                        <ListItem
                            key={item.name}
                            title={item.name}
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