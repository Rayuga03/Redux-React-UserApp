import { BUY_ICECREAM } from "./icecreamtypes";

const initialstate={
    numOfIceCreams: 20
}

const iceCreamReducer = (state=initialstate,actions) => {
    switch(actions.type) {
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }
        default: return state
    }
}

export default iceCreamReducer