import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';

function CakeContainer(props){
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            {/* <h2>Number of IceCream - {props.numOfIceCreams}</h2> */}
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToprops = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}

export default connect(
    mapStateToprops,
    mapDispatchToProps,
    )
(CakeContainer);