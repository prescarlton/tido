import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { FaTimes, FaAirFreshener } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
const ListViewCreateList = (props) => {

    const handleOnSubmit = (e) => {
        console.log('submitting')
        // first, prevent page reload
        e.preventDefault();
        props.handleSubmit(listName);
        // finally, clear listName for next time
        setListName('')

    }

    const handleOnClose = (e) => {
        setListName('')
        props.handleClose();
    }
    const [listName, setListName] = useState('');

    const onListNameChange = (e) => {
        setListName(e.target.value);
    }

    return (
        <>
            {
                props.showNewListForm ? (
                    <div className='listView__createList--formVisible'>
                        <form
                            className='listView__createListForm'
                            onSubmit={handleOnSubmit}
                        >
                            <input
                                value={listName}
                                onChange={onListNameChange}
                                type='text'
                                className='createListForm__ListNameField'
                                autoFocus
                                placeholder='Enter List Title...'
                            />

                            <div className='buttonGroup'>
                                <button type='submit' className='button button--action button--slim'>Create List</button>
                                <MdClose onClick={handleOnClose} className='cancelButton' />

                            </div>
                        </form>
                    </div>
                ) : (
                        <div className='listView__createList' onClick={props.handleNewListClick}>
                            <BsPlus className='listView__createList__plusBtn' /> <p >new list</p></div>
                    )
            }
        </>
    )
}

export default ListViewCreateList;