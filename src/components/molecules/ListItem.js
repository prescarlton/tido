import React from 'react';
import { MdEdit } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';

const ListItem = (props) => {
    return (
        <div className='listItem__container'>

            <div className='listItem__titleContainer'>
                <button
                    className={`listItem__checkbox ${props.completed && 'listItem__checkbox--checked'}`}
                    onClick={() => { 
                        props.onClickHandler(props.id,!props.completed) }}

                />
                <h3 className={`listItem__title ${props.completed && 'listItem__title--checked'}`}>{props.title}</h3>
            </div>
            <div className='listItem__buttonGroup'>
                <FaRegTrashAlt onClick={()=>{props.trashClickHandler(props.id)}} className='icon'/>
            </div>
        </div>
    )
}

export default ListItem;