import React from 'react';
import Modal from 'react-modal';

export default class ConfirmModal extends React.Component {

    handleClose = () => {
        this.props.onModalClose();
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                ariaHideApp={false}
                className='confirmModal'
                onRequestClose={this.handleClose}
            >

                <h3 className='confirmModal__title'>{this.props.modalTitle}</h3>
                <div className='confirmModal__buttonGroup'>
                    <button className='button button--secondary' onClick={this.props.onModalClose}>Cancel</button>
                    <button className='button button--danger' onClick={this.props.handleConfirm}>Delete Task</button>
                </div>

            </Modal>
        )
    }
}