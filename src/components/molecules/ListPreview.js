import React from 'react';
import TaskOverview from '../atoms/TaskOverview';
import { makeSlug } from '../../utils/slugs';
import { BsThreeDots } from 'react-icons/bs';
const ListPreview = (props) => {

    //temporary dummy data
    let tasks = []

    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
        tasks.push({
            name: `Task ${i}`
        })
    }


    return (
        <div className='listPreview'>
            <h2 className='listPreview__title'>{props.listName} <BsThreeDots className='listPreview__title__dots'/></h2>
            <div className='listPreview__taskContainer'>
                {tasks.map((task) => (
                    <TaskOverview
                        key={task.name}
                        task={task}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListPreview;