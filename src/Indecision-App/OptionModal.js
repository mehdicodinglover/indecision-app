import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen = {!!props.selectedOption}
            onRequestClose = {props.closeModal}
        >
            <h1>Selected Option:</h1>
            <h4>{props.selectedOption}</h4>
            <button onClick={props.closeModal}>OK!</button>
        </Modal>
    </div>
)

export default OptionModal;