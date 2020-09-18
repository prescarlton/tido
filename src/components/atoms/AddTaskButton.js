import React from 'react';

const AddTaskButton = (props) => {
    return (
        <div className='listItem__container listItem__addItem'>

            <div className='listItem__titleContainer' onClick={props.onClickHandler}>
                <h3 className='listItem__title listItem__addItem'> <span className='listItem__addIcon red'>+</span> Add Item</h3>
            </div>
        </div>
    );
};

export default AddTaskButton;