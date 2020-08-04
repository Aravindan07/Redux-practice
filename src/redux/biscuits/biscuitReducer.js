import {BUY_BISCUIT} from './biscuitTypes';


const initialState = {
    numOfBiscuit: 30,
}

const biscuitReducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_BISCUIT: return {
            ...state,
            numOfBiscuit: state.numOfBiscuit - 1
        }
        default: return state;
    }

}


export default biscuitReducer;