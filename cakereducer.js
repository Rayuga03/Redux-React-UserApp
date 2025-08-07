import { BUY_CAKE } from "./caketypes"
const initialstate ={
    numOfCakes:10
}
const cakereducer=(state=initialstate,action)=> {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-action.payload
        }
        default: return state 
    }
}
export default cakereducer 


