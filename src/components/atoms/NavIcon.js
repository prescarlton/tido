import React from 'react';

const NavIcon = (props) => {
    return (
        <div className='navIcon'>
            <p className='navIcon__title'>{props.title}</p>
            <props.icon
                className='navIcon__icon'
            />
        </div>
    )
}

export default NavIcon;