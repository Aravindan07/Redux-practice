import {combineReducers} from 'redux';
import CakeReducer from './cake/cakeReducer';
import IceCreamReducer from './icecream/icecreamReducer';
import BiscuitReducer from './biscuits/biscuitReducer';
import ModalReducer from './modal/modalReducer';


const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    biscuit: BiscuitReducer,
    modal: ModalReducer,
})


export default rootReducer;