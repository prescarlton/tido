import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
const NewListModal = (props) => {

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
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
            className='newListModal'
            onRequestClose={handleOnClose}
        >
            {/* <h2 className='newListModal__title'>Create a new list</h2> */}
            <form
                className='newListForm'
                onSubmit={handleOnSubmit}
                onReset={handleOnClose}
                >
                <label>List Name</label>
                <input
                    value={listName}
                    onChange={onListNameChange}
                    type='text'
                    className='newListForm__listNameField'
                    autoFocus
                />

                <div className='buttonGroup'>
                    <button type='reset' className='button button--secondary'>Cancel</button>
                    <button type='submit' className='button button--action'>Create List</button>
                </div>
            </form>
        </Modal>

    )
}

export default NewListModal;