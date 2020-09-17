import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const EditList = (props) => {

    const [listName, setListName] = useState(props.listTitle);
    const handleOnClose = (e) => {
        props.handleClose();
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.handleFormSubmit(listName);
    }

    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
            className='modal'
            onRequestClose={handleOnClose}
        >
            <div className='modal__topBar'>
                <FaTimes className='modal__Close link' onClick={handleOnClose} />
                <h3 className='modal__Title'>Edit List</h3>
            </div>

            <form className='fullWidth' onSubmit={handleFormSubmit}>

                <div className='form__inputGroup'>
                    <p>List Name</p>
                    <input type='text' placeholder='List Name' value={listName} onChange={(e) => setListName(e.target.value)} />
                </div>

                <div className='form__buttonGroup fullWidth'>
                    <button className='button button--secondary'>Cancel</button>
                    <button className='button button--action '>Save Changes</button>
                </div>

            </form>
        </Modal>

    )
}

export default EditList;