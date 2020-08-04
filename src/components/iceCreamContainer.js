import React from 'react';
import {connect} from 'react-redux';
import {buyIceCream} from '../redux/icecream/icecreamActions';

function IceCreamContainer(props){
    return (
        <div>
            <h2>Number of IceCream - {props.numOfIceCream}</h2>
            {/* <h2>Number of IceCream - {props.numOfIceCreams}</h2> */}
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToprops = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream()),
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToProps,
    )
(IceCreamContainer);