import {combineReducers} from 'redux';
import CakeReducer from './cake/cakeReducer';
import IceCreamReducer from './icecream/icecreamReducer';
import BiscuitReducer from './biscuits/biscuitReducer';


const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    biscuit: BiscuitReducer,
})


export default rootReducer;