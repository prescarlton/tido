import React from 'react';
import ListItem from '../molecules/ListItem';
import ListTitle from '../molecules/ListTitle';

const List = (props) => {

    return (
        <div className='list'>
            <ListTitle
                title={props.title}
            />
            {props.tasks.map((task) => {
                //get all necessary data from item's object
                let isCompleted = task.completed;
                let isPriority = task.priority;

                return (
                    <ListItem
                        key={task.name}
                        title={task.name}
                        checked={isCompleted}
                        priority={isPriority}
                        id={task.id}
                        onClickHandler={props.taskClickHandler}
                        trashClickHandler={props.trashClickHandler}

                    />
                )
            })}
        </div>
    )

}

export default List;