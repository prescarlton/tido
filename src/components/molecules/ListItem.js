import React from 'react';
import { MdEdit } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';

const ListItem = (props) => {
    return (
        <div className='listItem__container'>

            <div className='listItem__titleContainer'>
                <button
                    className={`listItem__checkbox ${props.checked && 'listItem__checkbox--checked'}`}
                    onClick={() => { props.onClickHandler(props.id) }}

                />
                <h3 className={`listItem__title ${props.checked && 'listItem__title--checked'}`}>{props.title}</h3>
            </div>
            <div className='listItem__buttonGroup'>
                <MdEdit />
                <FaRegTrashAlt onClick={()=>{props.trashClickHandler(props.id)}}/>
            </div>
        </div>
    )
}

export default ListItem;