import React from 'react';
import {connect} from 'react-redux';
import {openModal,closeModal} from '../redux/modal/modalActions';
import {Modal} from '../redux/modal/modalStyle';


function ModalContainer(props){
    return (
        <div>
            <h2>Click Below to Open Modal - {props.modal}</h2>
            <button onClick={props.openModal}>Open Now</button>
            {props.modal === 'true' && <Modal onClick={props.closeModal} />}
        </div>
    )
}

const mapStateToprops = state => {
    return{
        modal: state.modal.isOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(ModalContainer);