import React from 'react';

const ListItem = (props) => {
    return (
        <div className='listItem__container' onClick={props.onClickHandler}>
            <h3 className={`listItem__title ${props.checked && 'listItem__title--checked'}`}>{props.title}</h3>

            <button className={`listItem__checkbox ${props.checked && 'listItem__checkbox--checked'}`}
                
            />



        </div>
    )
}

export default ListItem;