import React from 'react';
import {connect} from 'react-redux';
import {buyBiscuit} from '../redux/biscuits/biscuitActions';


function BiscuitContainer (props){
    return (
        <div>
            <h2>Number of Biscuits - {props.numOfBiscuit}</h2>
            <button onClick={props.buyBiscuit}>Buy Biscuit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfBiscuit: state.biscuit.numOfBiscuit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyBiscuit: () => dispatch(buyBiscuit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BiscuitContainer);
